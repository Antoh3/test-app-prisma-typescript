import express, { Request, Response }  from 'express';
import { PrismaClient } from '@prisma/client';
// import PostRouter from './routes/postRoute';
import PostRouter from './routes/postRoute'

export const prisma = new PrismaClient();

const app = express();
const port = 8080;


async function main() {
    app.use(express.json());

    app.use("/api/v1/post", PostRouter);

    app.all("*", (req:Request, res:Response) =>{
        res.status(404).json({error : `Route ${req.originalUrl} not found`})
    });

    app.listen(port, ()=>{
        console.log(`Server listening to port ${port}`);
    });
}

main()
    .then(async ()=>{
        await prisma.$connect();
        console.log("connected to prisma");
        
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit();
    })