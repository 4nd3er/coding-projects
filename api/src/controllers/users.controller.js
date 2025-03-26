import { prisma } from "../db/db.js";
import bcrypt from 'bcrypt';
import { getErrPrisma } from "../helpers/getErrPrisma.js";

export const getUsers = async (_, res) => {
    try {
        const users = await prisma.user.findMany({
            omit: {
                password: true
            }
        });
        res.json(users);
    } catch (error) {
        getErrPrisma(error);
        return res.status(403).json({ error: err })
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: +req.params.id
            },
            omit: {
                password: true
            }
        });
        if (!user) return res.status(404).json({ error: 'User not found' });
        
        res.send(user);
    } catch (error) {
        getErrPrisma(error);
        return res.status(403).json({ error: err });
    }
};

export const createUser = async (req, res) => {
    try {
        const email = req.body.email;
        const userExist = await prisma.user.findFirst({
            where: {
                email
            }
        });
        if (userExist) return res.status(403).json({ error: 'User already exists' });

        const passHash = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS));
        const userObject = await {
            ...req.body,
            password: passHash
        };
        const newUser = await prisma.user.create({
            data: userObject
        });
        res.json(`User ${newUser.name} registered!`);

    } catch (error) {
        const err = getErrPrisma(error);
        res.json({ error: err });
    }
};

export const updateUserById = async (req, res) => {
    try {
        const userUpdated = await prisma.user.update({
            where: {
                id: +req.params.id
            },
            data: req.body
        });

        if (!userUpdated) return res.status(404).json({ error: 'User not found' });
        return res.status(200).json(userUpdated);
    } catch (error) {
        getErrPrisma(error);
        return res.status(403).json({ error: err })
    }
};

export const deleteUserById = async (req, res) => {
    try {
        const userExist = await prisma.user.findFirst({
            where: {
                id: +req.params.id
            }
        });
        if (!userExist) return res.status(404).json({ error: 'User not found' });
    
        const userDeleted = await prisma.user.delete({
            where: {
                id: +req.params.id
            }
        });

        res.send(userDeleted);
    } catch (error) {
        getErrPrisma(error);
        return res.status(403).json({ error: err })
    }
};