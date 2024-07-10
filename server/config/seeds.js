const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  // await cleanDB('Category', 'categories');
  await Category.deleteMany({});
  await Product.deleteMany({});
  await User.deleteMany({});

  const categories = await Category.insertMany([
    { name: 'Whole Beans' },
    { name: 'Tea' },
    { name: 'Pods' },
    { name: 'Instant' },
    { name: 'Accessories' },
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Premium Roast Coffee Beans',
      description: 'Freshly roasted coffee beans from exotic origins.',
      image: 'premium-coffee.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 200,
    },
    {
      name: 'Espresso Blend Coffee',
      description: 'Intense and aromatic espresso blend ground coffee.',
      image: 'espresso-blend.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 150,
    },
    {
      name: 'Coffee Sampler Pack',
      description: 'Discover a variety of coffee flavors in this sampler pack.',
      image: 'coffee-sampler.jpg',
      category: categories[0]._id,
      price: 19.99,
      quantity: 100,
    },
    {
      name: 'Ceremonial Grade Matcha Powder',
      description: 'High-quality ceremonial grade matcha powder for traditional tea ceremonies.',
      image: 'ceremonial-matcha.jpg',
      category: categories[1]._id,
      price: 14.99,
      quantity: 300,
    },
    {
      name: 'Ceremonial Grade Hojicha Powder',
      description: 'High-quality ceremonial grade Hojicha powder for traditional tea ceremonies.',
      image: 'ceremonial-matcha.jpg',
      category: categories[1]._id,
      price: 14.99,
      quantity: 300,
    },
    {
      name: 'Matcha Latte Mix',
      description: 'Smooth and creamy matcha latte mix, perfect for making at home.',
      image: 'matcha-latte-mix.jpg',
      category: categories[1]._id,
      price: 7.99,
      quantity: 250,
    },
    {
      name: 'Hojicha Latte Mix',
      description: 'Smooth and creamy hojicha latte mix, perfect for making at home.',
      image: 'matcha-latte-mix.jpg',
      category: categories[1]._id,
      price: 7.99,
      quantity: 250,
    },
    {
      name: 'Insulated Travel Coffee Tumbler',
      description: 'Double-walled insulated tumbler to keep your coffee hot on the go.',
      image: 'travel-coffee-tumbler.jpg',
      category: categories[4]._id,
      price: 19.99,
      quantity: 100,
    },
    {
      name: 'Set of 4 Ceramic Coffee Mugs',
      description: 'Elegant ceramic coffee mugs, perfect for daily use or gifting.',
      image: 'coffee-mug-set.jpg',
      category: categories[4]._id,
      price: 29.99,
      quantity: 50,
    },
    {
      name: 'Coffee Grinder',
      description: 'Electric grinder with adjustable settings for different grind sizes',
      image: '',
      category: categories[4]._id,
      price: 50.00,
      quantity: 15,
    },
    {
      name: 'Instant Coffee Mix',
      description: 'Create a delicious coffee frappe instantly with this easy-to-use mix.',
      image: 'coffee-frappe-mix.jpg',
      category: categories[3]._id,
      price: 9.99,
      quantity: 120,
    },
    {
      name: 'Instant Espresso Mix',
      description: 'Create a delicious coffee frappe instantly with this easy-to-use mix.',
      image: 'coffee-frappe-mix.jpg',
      category: categories[3]._id,
      price: 9.99,
      quantity: 120,
    },
    {
      name: 'Instant Matcha Latte Mix',
      description: 'Create a delicious coffee frappe instantly with this easy-to-use mix.',
      image: 'coffee-frappe-mix.jpg',
      category: categories[3]._id,
      price: 9.99,
      quantity: 120,
    },
    {
      name: 'Instant Hojicha Latte Mix',
      description: 'Create a delicious coffee frappe instantly with this easy-to-use mix.',
      image: 'coffee-frappe-mix.jpg',
      category: categories[3]._id,
      price: 9.99,
      quantity: 120,
    },
    {
      name: 'Espresso Pods',
      description: 'Single-serve espresso pods compatible with most machines',
      image: 'coffee-sampler.jpg',
      category: categories[2]._id,
      price: 10.00,
      quantity: 100,
    },
    {
      name: 'Breakfast Blend Pods',
      description: 'Light roast pods with a smooth, mild flavor',
      image: 'coffee-sampler.jpg',
      category: categories[2]._id,
      price: 9.00,
      quantity: 80,
    },
    {
      name: 'French Vanilla Pods',
      description: 'Flavored pods with a sweet, creamy vanilla taste.',
      image: 'coffee-sampler.jpg',
      category: categories[2]._id,
      price: 10.00,
      quantity: 60,
    },
    {
      name: 'Decaf Coffee Pods',
      description: 'Decaffeinated pods with a rich, full flavor.',
      image: 'coffee-sampler.jpg',
      category: categories[2]._id,
      price: 11.00,
      quantity: 70,
    },
    {
      name: 'Hazelnut Pods',
      description: 'Nutty and aromatic flavored coffee pods',
      image: 'coffee-sampler.jpg',
      category: categories[2]._id,
      price: 12.00,
      quantity: 75,
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Adjoa',
    lastName: 'Hackman',
    email: 'adjoa@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[3]._id, products[8]._id],
      },
    ],
  });

  await User.create({
    firstName: 'Nicole',
    lastName: 'Kim',
    email: 'nkim@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[1]._id, products[4]._id, products[9]._id],
      },
    ],
  });

  await User.create({
    firstName: 'Tal',
    lastName: 'BenDavid',
    email: 'tbd@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[2]._id, products[5]._id, products[10]._id],
      },
    ],
  });

  console.log('users seeded');

  process.exit();
});
