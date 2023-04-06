const noteController = require("../controller/notesController");
const router = require("express").Router();

router.get("/", noteController.all);

router.get("/add", noteController.add);
router.get("/addLogic", noteController.addLogic);

router.get("/single/:id", noteController.single);

router.get("/delAll", noteController.delAll);

router.get("/del/:id", noteController.del);

router.get("/edit/:id", noteController.edit);
router.get("/editLogic/:id", noteController.editLogic);

router.get("/find/", noteController.search);

module.exports = router;
