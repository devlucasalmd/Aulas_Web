const express = require('express');
const notesController = require('../controllers/notesController');
const router = express.Router();

router.route("/").get(notesController.all).post(notesController.create);

router.route("/:id").get(notesController.one).put(notesController.update).delete(notesController.delete);

module.exports = router;