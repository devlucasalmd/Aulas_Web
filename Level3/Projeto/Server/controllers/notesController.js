const Notes = require("../models/notesModel");

module.exports = {
    async all(req, res){
        try{
            const notes = await Notes.findAll();
            res.status(200).json(notes);
        } catch(error){
            res.status(400).send({ error: error});
        }
    },

    async one(req, res){
        try {
            const id = req.params.id;
            const notes = await Notes.findOne({ where: {id}});

            if(!notes) {
                return res.status(400).json("Notes not found");
            }
            res.status(200).json(notes);
        } catch {
            res.status(400).send({error: error})
        }
    },

    async create(req, res){
      try{
            await Notes.create(req.body);
            res.status(200).json("Notes inserted successfully");
        } catch (error){
            res.status(400).send({ error: error});
        }
    },
    
    async update(req, res){
        try{
            const {date, title, description} = req.body;
            const id = req.params.id;

            const notes = await Notes.findOne({ where: { id} });
            if(!notes) {
                return res.status(404).send({ error: "Notes not found." });
            }

            notes.date = date;
            notes.title = title;
            notes.description = description;

            await notes.save();
            res.status(201).json("Notes updated");
        } catch (error) {
            res.status(400).send({ error: error});
        }
    },

    async delete(req, res) {
        try {
            const id = req.params.id;
            const notes = await Notes.destroy({where: {id}});

            if(!notes) {
                return res.status(404).send({ error: "Notes not found." });
            }
            res.status(201).json("Notes removed");

        } catch (error) {
            
        }
    }
};