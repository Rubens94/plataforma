const { Schema, model } = require('mongoose');

const plataformaSchema = new Schema({
    nombre_plataforma: {
        type: String,
        required: [true, 'Nombre de plataforma obligatoria']
    },
    url_documentacion: {
        type: String,
        required: [true, 'URL de documentación obligatoria']
    },
    nombre_persona: {
        type: String,
        required: [true, 'Nombre de la persona quien ingresa la información']
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('Plataforma', plataformaSchema);