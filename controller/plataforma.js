const { response } = require('express');

const getPlataforma = (req, res = response) => {

    res.status(200).json({
        msg: 'getPlataforma...'
    });
}

module.exports = {
    getPlataforma
}