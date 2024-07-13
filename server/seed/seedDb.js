const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Import all seed data
const users = require("./users/userSeed");
const bourbons = require("./spirits/whiskey/bourbonSeed");
const canadianWhiskeys = require("./spirits/whiskey/canadianSeed");
const irishWhiskeys = require("./spirits/whiskey/irishSeed");
const japaneseWhiskeys = require("./spirits/whiskey/japaneseSeed");
const ryeWhiskeys = require("./spirits/whiskey/ryeSeed");
const scotchWhiskeys = require("./spirits/whiskey/scotchSeed");
const vodkas = require("./spirits/vodka/vodkaSeed");
const brandies = require("./spirits/brandy-cognac/brandySeed");
const cognacs = require("./spirits/brandy-cognac/cognacSeed");
const gins = require("./spirits/gin/ginSeed");
const nonAlcoholicSpirits = require("./spirits/non-alcoholic/nonalcoholicSeed");
const rums = require("./spirits/rum/rumSeed");
const anejoTequilas = require("./spirits/tequila/anejoSeed");
const blancoTequilas = require("./spirits/tequila/blancoSeed");
const mezcalTequilas = require("./spirits/tequila/mezcalSeed");
const reposadoTequilas = require("./spirits/tequila/reposadoSeed");
const beers = require("./beer-seltzers/beer/beerSeed");
const craftBeers = require("./beer-seltzers/craft/craftSeed");
const importBeers = require("./beer-seltzers/import/importSeed");
const kegs = require("./beer-seltzers/keg/kegSeed");
const seltzers = require("./beer-seltzers/seltzer/seltzerSeed");
const champagnes = require("./wines/champagne-sparkling/champagneSeed");
const sparklingWines = require("./wines/champagne-sparkling/sparklingSeed");
const redWines = require("./wines/red/redSeed");
const sweetWines = require("./wines/sweet/sweetSeed");
const whiteWines = require("./wines/white/whiteSeed");

// Import your Mongoose models
const User = require("../models/User");
const Product = require("../models/Product");

// Connect to your MongoDB
mongoose.connect("mongodb://localhost:27017/yourdatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to seed users
const seedUsers = async () => {
  for (let user of users) {
    user.password = bcrypt.hashSync(user.password, 10);
    await User.create(user);
  }
};

// Function to seed products
const seedProducts = async (products, category) => {
  for (let product of products) {
    product.category = category;
    await Product.create(product);
  }
};

// Main seeding function
const seedDatabase = async () => {
  try {
    // Seed users
    await seedUsers();
    console.log("Users seeded successfully.");

    // Seed products by category
    await seedProducts(bourbons, "Bourbon");
    await seedProducts(canadianWhiskeys, "Canadian Whiskey");
    await seedProducts(irishWhiskeys, "Irish Whiskey");
    await seedProducts(japaneseWhiskeys, "Japanese Whiskey");
    await seedProducts(ryeWhiskeys, "Rye Whiskey");
    await seedProducts(scotchWhiskeys, "Scotch Whiskey");
    await seedProducts(vodkas, "Vodka");
    await seedProducts(brandies, "Brandy");
    await seedProducts(cognacs, "Cognac");
    await seedProducts(gins, "Gin");
    await seedProducts(nonAlcoholicSpirits, "Non-Alcoholic");
    await seedProducts(rums, "Rum");
    await seedProducts(anejoTequilas, "Anejo Tequila");
    await seedProducts(blancoTequilas, "Blanco Tequila");
    await seedProducts(mezcalTequilas, "Mezcal Tequila");
    await seedProducts(reposadoTequilas, "Reposado Tequila");
    await seedProducts(beers, "Beer");
    await seedProducts(craftBeers, "Craft Beer");
    await seedProducts(importBeers, "Import Beer");
    await seedProducts(kegs, "Keg");
    await seedProducts(seltzers, "Seltzer");
    await seedProducts(champagnes, "Champagne");
    await seedProducts(sparklingWines, "Sparkling Wine");
    await seedProducts(redWines, "Red Wine");
    await seedProducts(sweetWines, "Sweet Wine");
    await seedProducts(whiteWines, "White Wine");

    console.log("All products seeded successfully.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

// Run the seeding function
seedDatabase();
