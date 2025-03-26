import { prisma } from "../db/db.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await prisma.user.findFirst({
            where: {
                email
            }
        });

        const passCorrect = await bcrypt.compare(password, userExist?.password ?? "");

        if (!userExist || !passCorrect) {
            return res.status(404).json({ error: "Email or password incorrect, try again" });
        }

        const user = {
            id: userExist.id,
            name: userExist.name,
            role: userExist.role,
        }

        jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '1d' }, (err, token) => {
            if (err) return res.status(400).json({ error: err })
            res
                .cookie('token', token, {
                    httpOnly: true,
                    maxAge: 3600 * 60 * 60
                })
                .json({ ...user, token });
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export const logout = (req, res) => {
    res
        .clearCookie('token')
        .json({ message: 'Cerrando sesion' });
};