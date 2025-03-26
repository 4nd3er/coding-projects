import authRoutes from './auth.routes.js';
import userRoutes from './users.routes.js';
import projectsRoutes from './projects.routes.js';

export const routes = (app) => {
    app.use('/api', userRoutes);
    app.use('/api', projectsRoutes);
    app.use('/api', authRoutes);
}