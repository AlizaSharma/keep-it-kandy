const db = require('./config/connection');
const { Candies } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('User', 'users');
    await cleanDB('Candies', 'candies');

    const candies = await Candies.insertMany([
        {
            name: 'Gummy Bears',
            description: 'Small bear shaped gummy candies, fruit flavored.',
            image: '',
            price: 3.99,
            quantity: 100
        },
        {
            name: 'Chocolate Bars',
            description: 'Milk chocolate candy bars.',
            image: '',
            price: 2.99,
            quantity: 50
        },
        {
            name: 'Sour Worms',
            description: 'Sour gummy worms, fruit flavored.',
            image: '',
            price: 3.99,
            quantity: 100
        }
    ]);


    console.log('candies seeded');
});
