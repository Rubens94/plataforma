const { Router } = require('express');
//const { check } = require('express-validator');

const {
    getPlataforma
} = require('../controller/plataforma');

const router = Router();

router.get('/', getPlataforma);

module.exports = router;