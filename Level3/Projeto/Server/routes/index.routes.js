const notesController = require('../controllers/notesController');
const router = require('express').Router();

router.route("/")
    .get(notesController.getAll)
    .post(notesController.createNote);
    
router.route("/:id")
    .get(notesController.notesId)
    .put(notesController.updateNote)
    .delete(notesController.deleteNote);

module.exports = router;