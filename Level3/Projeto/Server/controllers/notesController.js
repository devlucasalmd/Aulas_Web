const Note = require("../models/notesModel");

module.exports = class notesController{
    static async getAll(req, res){
        try{
            const notes = await Note.findAll();
            res.status(200).json(notes);
        } catch(error){
            res.status(400).send({ error: error});
        }
    }
    static async notesId(req, res){
        try {
            const { id } = req.params;
            const note = await Note.findByPk(id);
            if(note) {
                return res.status(200).json(note);
            } else {
                res.status(404).json({error: 'Note Not Found'});
            }
        } catch (error) {
            res.status(500).send({error: error})
        }
    }

    static async createNote(req, res){
      try{
            const {title, description, date } = req.body;
            const note = await Note.create({title, description, date});            
            res.status(200).json("Notes inserted successfully");
        } catch (error){
            res.status(500).json({ error: error});
        }
    }

    static async updateNote(req, res){
        try{
            const { id } = req.params;
            const {date, title, description} = req.body;            

            const note = await Note.findByPk(id);
            if(note) {
                note.date = date;
                note.title = title;
                note.description = description;
                await note.save();
                res.status(201).json("Notes updated");
            } else{
                res.status(404).send({ error: "Notes not found." });
            }
        } catch (error) {
            res.status(500).send({ error: error});
        }
    }

    static async deleteNote(req, res) {
        try {
            const { id } = req.params;
            const note = await Note.findByPk(id);
            if(note) {
                await note.destroy();
                res.status(201).json("Notes removed");    
            } else {
                res.status(404).json({ error: "Notes not found." });
            }    
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
};