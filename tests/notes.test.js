const mongoose = require('mongoose');
const request  = require('supertest');
const app = require('../models/app');
const Plataforma  = require('../models/Plataforma');

jest.setTimeout(10000);

const api = request(app);
jest.useFakeTimers();
const initialPlataforma = [
    {
        nombre_plataforma: 'Udemy',
        url_documentacion: 'https://udemy.com',
        nombre_persona: 'Eren Bali'
    },
    {
        nombre_plataforma: 'Platzy',
        url_documentacion: 'https://platzy.com',
        nombre_persona: 'Freddy'
    }
];

beforeEach(async() => {

    await Plataforma.deleteMany({});

    const plataforma1 = new Plataforma(initialPlataforma[0]);
    await plataforma1.save();

    const plataforma2 = new Plataforma(initialPlataforma[1]);
    await plataforma2.save();

});

test('Se obtienen 2 plataformas', async () => {
    
    const response = await api.get('/api/plataforma');
    
    expect(response.body).toHaveLength(initialPlataforma.length);
});

test('Una nueva plataforma', async () => {
    const newPlataforma = {
        nombre_plataforma: 'Youtube',
        url_documentacion: 'https://youtube.com',
        nombre_persona: 'Google'
    }


    await api
        .post('/api/plataforma')
        .send(newPlataforma)
        .expect(200)
        .expect('Content-Type', /json/);

    const response = await api.get('/api/plataforma');

    const contents = response.body.map(plataforma => plataforma.content);

    expect(contents).toContain(newPlataforma.content)
});

afterAll(() => { 
    mongoose.connection.close()
});