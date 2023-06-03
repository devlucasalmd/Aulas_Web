const Noticias = require("../models/noticiasModels");

module.exports = class  noticiasController{
    static async getAll(req, res){
        try{
            const news = await Noticias.findAll();
            res.status(200).json(news);
        } catch(error){
            res.status(400).send({ error: error});
        }
    }
    static async noticiaId(req, res){
        try {
            const { id } = req.params;
            const news = await Noticias.findByPk(id);
            if(news) {
                return res.status(200).json(news);
            } else {
                res.status(404).json({error: 'Note Not Found'});
            }
        } catch (error) {
            res.status(500).send({error: error})
        }
    }

    static async createNoticia(req, res){
      try{
            const {title, description, date, image } = req.body;
            const news = await Noticias.create({title, description, date, image});            
            res.status(200).json({message:"Noticia inserted successfully", news:{title, description, date, image}});        
        } catch (error){
            res.status(500).json({ error: error});
        }
    }

    static async updateNoticia(req, res){
        try{
            const { id } = req.params;
            const {date, title, description, image} = req.body;            

            const news = await Noticias.findByPk(id);
            if(news) {
                news.date = date;
                news.title = title;
                news.description = description;
                news.image = image;
                await Noticias.save();
                res.status(201).json("Noticia updated");
            } else{
                res.status(404).send({ error: "Noticia not found." });
            }
        } catch (error) {
            res.status(500).send({ error: error});
        }
    }

    static async deleteNoticia(req, res) {
        try {
            const { id } = req.params;
            const news = await Noticias.findByPk(id);
            if(news) {
                await Noticias.destroy();
                res.status(201).json("Noticia removed");    
            } else {
                res.status(404).json({ error: "Noticia not found." });
            }    
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
};