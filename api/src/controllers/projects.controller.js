import { prisma } from "../db/db.js";
import { getErrPrisma } from "../helpers/getErrPrisma.js";
import { getDataUser } from "../middlewares/auth.js";

export const getProjects = async (_, res) => {
    try {
        const projects = await prisma.project.findMany({
            where: {
                approved: true
            },
            omit: { userId: true },
            include: {
                user: {
                    select: { name: true }
                },
                link: {
                    omit: {
                        id: true,
                        projectId: true,
                        nameId: true
                    },
                    include: {
                        name: {
                            omit: { id: true }
                        }
                    }
                }
            }
        });
        res.send(projects);
    } catch (error) {
        const err = getErrPrisma(error);
        return res.status(400).json({ error: err })
    }
};

export const getProjectById = async (req, res) => {
    try {
        const role = getDataUser(req);
        const project = await prisma.project.findFirst({
            where: {
                id: +req.params.id,
                ...(role !== "ADMIN" && { approved: true }),
            },
            omit: { userId: true },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                    }
                }
            }
        })
        if (!project) return res.status(404).json({ error: 'Project not found' });

        return res.send(project);
    } catch (error) {
        const err = getErrPrisma(error);
        return res.status(400).json({ error: err })
    }
};

export const getProjectsByUserId = async (req, res) => {
    try {
        const projectsUser = await prisma.user.findFirst({
            where: { id: +req.params.userId },
            include: { project: true }
        });

        if (!projectsUser) return res.status(404).json({ error: 'User not found' });

        res.json(projectsUser.project);
    } catch (error) {
        const err = getErrPrisma(error);
        return res.status(400).json({ error: err })
    }
};

export const createProject = async (req, res) => {
    try {

        const projectCreated = await prisma.project.create({
            data: {
                name: req.body.name,
                img: req.body.img ?? null,
                userId: req.body.userId,
                video: req.body.video ?? null,
                link: {
                    createMany: { data: req.body.links }
                }
            }
        });
        return res.send(projectCreated);

    } catch (error) {
        const err = getErrPrisma(error);
        return res.status(404).json({ error: err })
    }
};

export const updateProjectById = async (req, res) => {
    try {

        const projectUpdated = await prisma.project.update({
            where: {
                id: +req.params.id
            },
            data: req.body
        });
        return res.send(projectUpdated);
    } catch (error) {
        console.log(error.code);
        const err = getErrPrisma(error);
        return res.status(400).json({ error: err })
    }
};

export const deleteProjectById = async (req, res) => {
    try {
        const projectExist = await prisma.project.findFirst({
            where: {
                id: +req.params.id
            }
        });
        if (!projectExist) return res.status(404).json({ error: 'Project not found' });

        const projectDeleted = await prisma.project.delete({
            where: {
                id: +req.params.id
            }
        });

        return res.send(projectDeleted);
    } catch (error) {
        const err = getErrPrisma(error);
        return res.status(400).json({ error: err })
    }
};