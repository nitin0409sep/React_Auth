//? IMPORTS
import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import dotenv from 'dotenv';

//? ENV CONFIG
dotenv.config();

//! Everyhting uses env var's should written below than its config() call
import '../database/db-config/db-connection';

//? PORT 
const app = express();
const PORT = process.env.PORT || 80;

//? MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//? IMPORT ROUTES
import { authenticationRoute } from '../routes/authentication.route';
import { userRoute } from '../routes/users.routes';

//? ROUTES
app.use('/api/v1/auth', authenticationRoute)
app.use('/api/v1/user', userRoute)

//? ERROR HANDLING MIDDLEWARE 
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//? START SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
