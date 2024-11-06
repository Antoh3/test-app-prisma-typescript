import { Request,Response } from "express";
import { prisma } from "../server";


const createBlogPost = async (req:Request, res:Response) => {
    try {
        const { tittle, content } = req.body;
        const  newBlogPost = await prisma.post.create({
            data:{
                tittle,
                content,
            },
        });
        res.status(200).json(newBlogPost);
    } catch (e) {
       res.status(500).json({error:e}) 
    }
}


const createPostAndComments = async (req:Request, res:Response) => {
    try {
        const { tittle,content,comments } = req.body;
        const newBlogPost = await prisma.post.create({
            data:{
                tittle,
                content,
                comments:{
                    create: comments,
                }
            },
            include:{
                comments: true,
            }
        });
        res.status(200).json(newBlogPost);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

const getBlogPosts = async (req:Request, res:Response) => {
    try {
        const blogPosts =  await prisma.post.findMany()
        res.status(200).json(blogPosts);
    } catch (error) {
       res.status(500).json({error:error}); 
    }
}

const getBlogPost = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const blogPost = await prisma.post.findUnique({
            where:{
                id: Number(id)
            }
        })
        res.status(200).json(blogPost);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

const updateBlogPost = async (req:Request, res: Response) => {
    try {
        const { id,tittle,content} = req.body;
        const updatedBlogPost = await prisma.post.update({
            where:{
                id: Number(id),
            },
            data:{
                tittle,
                content,
            },
        });
         res.status(200).json(updatedBlogPost);
    } catch (error) {
      res.status(500).json({error:error})  
    }
}

const deleteBlogPost = async (req:Request, res:Response) => {
    try {
        const { id } = req.body
        const deletedBlogPost = await prisma.post.delete({
            where:{
                id:Number(id)
            },
        });
        res.status(200).json(deletedBlogPost);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

const deleteAllBlogPosts = async (req:Request, res:Response) => {
    try {
        const deletedPosts = await prisma.post.deleteMany()
        res.status(200).json(deletedPosts);
    } catch (error) {
        res.status(500).json({error:error})
    }
}

const likeBlogPost = async (req:Request, res: Response) => {
    try {
        const { id } = req.body;
        const likedPost = await prisma.post.update({
            where:{
                id:Number(id),
            },
            data:{
                LikesCount:{
                    increment: 1,
                },
            },
        });
        res.status(200).json(likedPost);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export default {
    createBlogPost,
    createPostAndComments,
    getBlogPost,
    getBlogPosts,
    updateBlogPost,
    deleteBlogPost,
    deleteAllBlogPosts,
    likeBlogPost,
};