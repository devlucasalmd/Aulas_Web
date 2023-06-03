const Blog = require("../models/blogModels");

module.exports = class blogController{
    static async getAll(req, res){
        try{
            const blog = await Blog.findAll();
            res.status(200).json(blog);
        } catch(error){
            res.status(400).send({ error: error});
        }
    }
    static async blogId(req, res){
        try {
            const { id } = req.params;
            const blog = await Blog.findByPk(id);
            if(blog) {
                return res.status(200).json(blog);
            } else {
                res.status(404).json({error: 'Note Not Found'});
            }
        } catch (error) {
            res.status(500).send({error: error})
        }
    }

    static async createBlog(req, res){
      try{
            const {title, description, date, image } = req.body;
            const blog = await Blog.create({title, description, date, image});            
            res.status(200).json({message:"Blog inserted successfully", blog:{title, description, date, image}});        
        } catch (error){
            res.status(500).json({ error: error});
        }
    }

    static async updateBlog(req, res){
        try{
            const { id } = req.params;
            const {date, title, description, image} = req.body;            

            const blog = await Blog.findByPk(id);
            if(blog) {
                blog.date = date;
                blog.title = title;
                blog.description = description;
                blog.image = image;
                await blog.save();
                res.status(201).json("Blog updated");
            } else{
                res.status(404).send({ error: "Blog not found." });
            }
        } catch (error) {
            res.status(500).send({ error: error});
        }
    }

    static async deleteBlog(req, res) {
        try {
            const { id } = req.params;
            const blog = await Blog.findByPk(id);
            if(blog) {
                await blog.destroy();
                res.status(201).json("Blog removed");    
            } else {
                res.status(404).json({ error: "Blog not found." });
            }    
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
};