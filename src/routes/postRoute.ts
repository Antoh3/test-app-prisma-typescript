import express from 'express';
import postController from '../controllers/postController';

const router = express.Router();


router.post("/create", postController.createBlogPost);
router.post("/createPostAndComment", postController.createPostAndComments);
router.get('/getall', postController.getBlogPosts);
router.get("/get/:id", postController.getBlogPost);
router.put("/update/:id",postController.updateBlogPost);
router.delete("/delete/:id",postController.deleteBlogPost);
router.delete("/deleteall", postController.deleteAllBlogPosts);
router.post("/like", postController.likeBlogPost);

export default router;