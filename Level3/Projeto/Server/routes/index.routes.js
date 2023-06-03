const notesController = require('../controllers/notesController');
const blogController = require('../controllers/blogController');
const noticiasController = require('../controllers/noticiasController');
const router = require('express').Router();

router.route("/")
    .get(notesController.getAll)
    .post(notesController.createNote);
    
router.route("/:id")
    .get(notesController.notesId)
    .put(notesController.updateNote)
    .delete(notesController.deleteNote);

router.route("/blog")
    .get(blogController.getAll)
    .post(blogController.createBlog);
    
router.route("/blog/:id")
    .get(blogController.blogId)
    .put(blogController.updateBlog)
    .delete(blogController.deleteBlog);

router.route("/noticias")
    .get(noticiasController.getAll)
    .post(noticiasController.createNoticia);
    
router.route("/noticias/:id")
    .get(noticiasController.noticiaId)
    .put(noticiasController.updateNoticia)
    .delete(noticiasController.deleteNoticia);


module.exports = router;