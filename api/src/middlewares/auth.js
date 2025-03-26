import jwt from 'jsonwebtoken';

export const validationToken = (req, res, next) => {
    const BearerToken = req.headers.authorization;
    if (!BearerToken) {
        return res.status(403).json({ message: "Authorization denied" })
    };
    const token = BearerToken.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        next();
    });
}

export const validateRole = (req, res, next, ...roles) => {
    const BearerToken = req.headers.authorization;
    const token = BearerToken.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET_KEY, (_, user) => {
        if (!roles.includes(user.role)) {
            return res.status(403).json({ message: "Authorization denied" });
        }
        next();
    });
}

export const getDataUser = (req) => {
    let role = "";
    const BearerToken = req.headers.authorization;
    const token = BearerToken.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return err;
        }
        role = user.role;
    });
    return role;
}