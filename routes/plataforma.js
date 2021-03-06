const { Router } = require('express');
const { check } = require('express-validator');
const { revisarValidaciones } = require('../middlewares/revisarValidaciones');

const {
    getPlataforma,
    postPlataforma,
    getPlataformaById,
    putPlataformaById,
    deletePlataformaById
} = require('../controller/plataforma');

const router = Router();

router.get('/', getPlataforma);

router.post('/', [
    check('nombre_plataforma', 'Nombre de la plataforma obligatorio').not().isEmpty().escape().trim(),
    check('url_documentacion', 'URL de la documentación obligatoria').not().isEmpty().trim(),
    check('nombre_persona', 'Nombre de quien pública la información').not().isEmpty().escape().trim()
],
revisarValidaciones, 
postPlataforma);

router.get('/:id', getPlataformaById);

router.put('/:id', [
    check('nombre_plataforma', 'Nombre de la plataforma obligatorio').not().isEmpty().escape().trim(),
    check('url_documentacion', 'URL de la documentación obligatoria').not().isEmpty().trim(),
    check('nombre_persona', 'Nombre de quien pública la información').not().isEmpty().escape().trim()
],
revisarValidaciones, 
putPlataformaById);

router.delete('/:id', deletePlataformaById);

module.exports = router;