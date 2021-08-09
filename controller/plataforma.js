const { response } = require('express');
const Plataforma  = require('../models/Plataforma');

const getPlataforma = async(req, res = response) => {

    const plataformas = await Plataforma.find();

    res.status(200).json(plataformas);
}

const postPlataforma = async(req, res = response) => {

    const plataforma = req.body;

    try{
        const plataformaDB = new Plataforma( plataforma );
        await plataformaDB.save();

        res.status(200).json(plataformaDB);
    } catch (err){
        console.log(err);
        res.status(400).json(err);
    }
}

module.exports = {
    getPlataforma,
    postPlataforma
}