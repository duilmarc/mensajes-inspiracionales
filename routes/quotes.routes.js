const router = require("express").Router();

const { QuotesController } = require('../controllers');

router.get('/', QuotesController.index);
// metodo que busca dentro de los json los archivos en app.js
router.get('/all',QuotesController.get);
router.post('/',QuotesController.add);


module.exports = router;