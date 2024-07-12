const importedBeers = [
  {
    id: 1,
    name: "Heineken",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/heineken.jpg",
    description: "A smooth and refreshing lager with a mildly bitter taste.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Heineken",
    rating: 4.5,
    reviews: "A classic and reliable beer for any occasion.",
    origin: "Netherlands",
    pairing: "Cheese, seafood",
    availability: "In Stock",
  },
  {
    id: 2,
    name: "Corona Extra",
    price: 9.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/corona-extra.jpg",
    description: "A light and crisp lager with a refreshing taste.",
    category: "Lager",
    abv: 4.5,
    size: "12oz",
    brand: "Corona",
    rating: 4.4,
    reviews: "Perfect for a sunny day or a beach party.",
    origin: "Mexico",
    pairing: "Seafood, light snacks",
    availability: "In Stock",
  },
  {
    id: 3,
    name: "Guinness Draught",
    price: 11.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/guinness-draught.jpg",
    description: "A smooth and creamy stout with roasted malt flavors.",
    category: "Stout",
    abv: 4.2,
    size: "12oz",
    brand: "Guinness",
    rating: 4.8,
    reviews: "A classic stout with a rich and satisfying taste.",
    origin: "Ireland",
    pairing: "Stews, roasted meats",
    availability: "In Stock",
  },
  {
    id: 4,
    name: "Stella Artois",
    price: 10.99,
    quantity: 90,
    imageUrl: "https://www.example.com/images/stella-artois.jpg",
    description: "A crisp and refreshing lager with a slightly bitter finish.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Stella Artois",
    rating: 4.6,
    reviews: "A sophisticated and well-balanced lager.",
    origin: "Belgium",
    pairing: "Salads, seafood",
    availability: "In Stock",
  },
  {
    id: 5,
    name: "Modelo Especial",
    price: 9.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/modelo-especial.jpg",
    description: "A rich, full-flavored pilsner with a crisp finish.",
    category: "Pilsner",
    abv: 4.4,
    size: "12oz",
    brand: "Modelo",
    rating: 4.5,
    reviews: "A well-balanced and refreshing pilsner.",
    origin: "Mexico",
    pairing: "Spicy foods, seafood",
    availability: "In Stock",
  },
  {
    id: 6,
    name: "Carlsberg",
    price: 9.99,
    quantity: 110,
    imageUrl: "https://www.example.com/images/carlsberg.jpg",
    description: "A well-balanced lager with a hoppy aroma and crisp taste.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Carlsberg",
    rating: 4.4,
    reviews: "A refreshing and easy-drinking beer.",
    origin: "Denmark",
    pairing: "Grilled meats, cheese",
    availability: "In Stock",
  },
  {
    id: 7,
    name: "Peroni Nastro Azzurro",
    price: 10.99,
    quantity: 95,
    imageUrl: "https://www.example.com/images/peroni-nastro-azzurro.jpg",
    description:
      "A crisp and refreshing lager with a delicate balance of bitterness and sweetness.",
    category: "Lager",
    abv: 5.1,
    size: "12oz",
    brand: "Peroni",
    rating: 4.6,
    reviews: "A stylish and refreshing Italian lager.",
    origin: "Italy",
    pairing: "Pasta, seafood",
    availability: "In Stock",
  },
  {
    id: 8,
    name: "Beck's",
    price: 9.99,
    quantity: 110,
    imageUrl: "https://www.example.com/images/becks.jpg",
    description:
      "A full-bodied German lager with a crisp and refreshing taste.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Beck's",
    rating: 4.5,
    reviews: "A classic and reliable German lager.",
    origin: "Germany",
    pairing: "Sausages, pretzels",
    availability: "In Stock",
  },
  {
    id: 9,
    name: "Hoegaarden",
    price: 11.99,
    quantity: 80,
    imageUrl: "https://www.example.com/images/hoegaarden.jpg",
    description:
      "A Belgian wheat beer with a refreshing taste of coriander and orange peel.",
    category: "Wheat",
    abv: 4.9,
    size: "12oz",
    brand: "Hoegaarden",
    rating: 4.7,
    reviews: "A light and refreshing wheat beer.",
    origin: "Belgium",
    pairing: "Salads, seafood",
    availability: "In Stock",
  },
  {
    id: 10,
    name: "Amstel Light",
    price: 10.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/amstel-light.jpg",
    description:
      "A light and refreshing beer with a subtle malt and hop flavor.",
    category: "Light",
    abv: 3.5,
    size: "12oz",
    brand: "Amstel",
    rating: 4.4,
    reviews: "A perfect light beer for any occasion.",
    origin: "Netherlands",
    pairing: "Grilled chicken, salads",
    availability: "In Stock",
  },
  {
    id: 11,
    name: "Newcastle Brown Ale",
    price: 11.99,
    quantity: 85,
    imageUrl: "https://www.example.com/images/newcastle-brown-ale.jpg",
    description: "A smooth and rich brown ale with a nutty flavor.",
    category: "Brown Ale",
    abv: 4.7,
    size: "12oz",
    brand: "Newcastle",
    rating: 4.6,
    reviews: "A well-balanced and flavorful brown ale.",
    origin: "England",
    pairing: "Roasted meats, stews",
    availability: "In Stock",
  },
  {
    id: 12,
    name: "Tsingtao",
    price: 9.99,
    quantity: 110,
    imageUrl: "https://www.example.com/images/tsingtao.jpg",
    description: "A crisp and refreshing lager with a light malt flavor.",
    category: "Lager",
    abv: 4.8,
    size: "12oz",
    brand: "Tsingtao",
    rating: 4.4,
    reviews: "A popular Chinese beer with a clean finish.",
    origin: "China",
    pairing: "Asian cuisine, seafood",
    availability: "In Stock",
  },
  {
    id: 13,
    name: "Singha",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/singha.jpg",
    description:
      "A full-bodied lager with a strong hop flavor and slight bitterness.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Singha",
    rating: 4.5,
    reviews: "A refreshing and flavorful Thai lager.",
    origin: "Thailand",
    pairing: "Spicy foods, seafood",
    availability: "In Stock",
  },
  {
    id: 14,
    name: "Asahi Super Dry",
    price: 11.99,
    quantity: 95,
    imageUrl: "https://www.example.com/images/asahi-super-dry.jpg",
    description: "A crisp and dry lager with a clean and refreshing finish.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Asahi",
    rating: 4.6,
    reviews: "A popular Japanese beer with a dry finish.",
    origin: "Japan",
    pairing: "Sushi, seafood",
    availability: "In Stock",
  },
  {
    id: 15,
    name: "Kirin Ichiban",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/kirin-ichiban.jpg",
    description: "A smooth and light beer with a mild malt flavor.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Kirin",
    rating: 4.5,
    reviews: "A clean and refreshing Japanese lager.",
    origin: "Japan",
    pairing: "Asian cuisine, light snacks",
    availability: "In Stock",
  },
  {
    id: 16,
    name: "Red Stripe",
    price: 10.99,
    quantity: 110,
    imageUrl: "https://www.example.com/images/red-stripe.jpg",
    description: "A light and crisp lager with a smooth finish.",
    category: "Lager",
    abv: 4.7,
    size: "12oz",
    brand: "Red Stripe",
    rating: 4.4,
    reviews: "A popular Jamaican beer with a refreshing taste.",
    origin: "Jamaica",
    pairing: "BBQ, spicy foods",
    availability: "In Stock",
  },
  {
    id: 17,
    name: "Pacifico",
    price: 9.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/pacifico.jpg",
    description: "A crisp and refreshing lager with a hint of malt.",
    category: "Lager",
    abv: 4.5,
    size: "12oz",
    brand: "Pacifico",
    rating: 4.4,
    reviews: "A smooth and easy-drinking Mexican lager.",
    origin: "Mexico",
    pairing: "Seafood, tacos",
    availability: "In Stock",
  },
  {
    id: 18,
    name: "Pilsner Urquell",
    price: 11.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/pilsner-urquell.jpg",
    description:
      "A classic Czech pilsner with a balance of sweetness and bitterness.",
    category: "Pilsner",
    abv: 4.4,
    size: "12oz",
    brand: "Pilsner Urquell",
    rating: 4.7,
    reviews: "A well-balanced and refreshing pilsner.",
    origin: "Czech Republic",
    pairing: "Cheese, sausages",
    availability: "In Stock",
  },
  {
    id: 19,
    name: "Leffe Blonde",
    price: 12.99,
    quantity: 90,
    imageUrl: "https://www.example.com/images/leffe-blonde.jpg",
    description: "A Belgian abbey beer with a smooth and slightly sweet taste.",
    category: "Blonde",
    abv: 6.6,
    size: "12oz",
    brand: "Leffe",
    rating: 4.8,
    reviews: "A rich and flavorful Belgian ale.",
    origin: "Belgium",
    pairing: "Cheese, seafood",
    availability: "In Stock",
  },
  {
    id: 20,
    name: "Duvel",
    price: 13.99,
    quantity: 80,
    imageUrl: "https://www.example.com/images/duvel.jpg",
    description: "A strong Belgian golden ale with a fruity and spicy aroma.",
    category: "Golden Ale",
    abv: 8.5,
    size: "12oz",
    brand: "Duvel",
    rating: 4.8,
    reviews: "A well-crafted and complex Belgian ale.",
    origin: "Belgium",
    pairing: "Cheese, roasted meats",
    availability: "In Stock",
  },
  {
    id: 21,
    name: "Chimay Blue",
    price: 14.99,
    quantity: 70,
    imageUrl: "https://www.example.com/images/chimay-blue.jpg",
    description:
      "A rich and complex Trappist ale with dark fruit and spice flavors.",
    category: "Trappist",
    abv: 9,
    size: "12oz",
    brand: "Chimay",
    rating: 4.9,
    reviews: "A bold and flavorful Trappist ale.",
    origin: "Belgium",
    pairing: "Stews, dark chocolate",
    availability: "In Stock",
  },
  {
    id: 22,
    name: "Warsteiner Premium Verum",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/warsteiner-premium-verum.jpg",
    description: "A German pilsner with a crisp and refreshing taste.",
    category: "Pilsner",
    abv: 4.8,
    size: "12oz",
    brand: "Warsteiner",
    rating: 4.6,
    reviews: "A classic and well-balanced German pilsner.",
    origin: "Germany",
    pairing: "Grilled meats, cheese",
    availability: "In Stock",
  },
  {
    id: 23,
    name: "Paulaner Hefe-Weizen",
    price: 11.99,
    quantity: 90,
    imageUrl: "https://www.example.com/images/paulaner-hefe-weizen.jpg",
    description:
      "A traditional German wheat beer with banana and clove aromas.",
    category: "Wheat",
    abv: 5.5,
    size: "12oz",
    brand: "Paulaner",
    rating: 4.7,
    reviews: "A refreshing and flavorful wheat beer.",
    origin: "Germany",
    pairing: "Salads, seafood",
    availability: "In Stock",
  },
  {
    id: 24,
    name: "Dos Equis Lager",
    price: 9.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/dos-equis-lager.jpg",
    description: "A light and refreshing Mexican lager with a smooth finish.",
    category: "Lager",
    abv: 4.2,
    size: "12oz",
    brand: "Dos Equis",
    rating: 4.4,
    reviews: "A popular and easy-drinking Mexican lager.",
    origin: "Mexico",
    pairing: "Tacos, spicy foods",
    availability: "In Stock",
  },
  {
    id: 25,
    name: "Foster's Lager",
    price: 9.99,
    quantity: 110,
    imageUrl: "https://www.example.com/images/fosters-lager.jpg",
    description:
      "A crisp and refreshing Australian lager with a smooth finish.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Foster's",
    rating: 4.4,
    reviews: "A well-balanced and refreshing lager.",
    origin: "Australia",
    pairing: "BBQ, seafood",
    availability: "In Stock",
  },
  {
    id: 26,
    name: "Heineken Light",
    price: 10.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/heineken-light.jpg",
    description: "A light beer with a clean and refreshing taste.",
    category: "Light",
    abv: 3.3,
    size: "12oz",
    brand: "Heineken",
    rating: 4.3,
    reviews: "A perfect light beer for any occasion.",
    origin: "Netherlands",
    pairing: "Salads, light snacks",
    availability: "In Stock",
  },
  {
    id: 27,
    name: "Amstel Lager",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/amstel-lager.jpg",
    description: "A smooth and well-balanced lager with a crisp finish.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Amstel",
    rating: 4.5,
    reviews: "A classic and reliable lager.",
    origin: "Netherlands",
    pairing: "Cheese, seafood",
    availability: "In Stock",
  },
  {
    id: 28,
    name: "Harp Lager",
    price: 10.99,
    quantity: 110,
    imageUrl: "https://www.example.com/images/harp-lager.jpg",
    description: "A crisp and refreshing lager with a clean finish.",
    category: "Lager",
    abv: 4.5,
    size: "12oz",
    brand: "Harp",
    rating: 4.4,
    reviews: "A smooth and easy-drinking Irish lager.",
    origin: "Ireland",
    pairing: "Fish and chips, seafood",
    availability: "In Stock",
  },
  {
    id: 29,
    name: "Weihenstephaner Hefeweissbier",
    price: 12.99,
    quantity: 85,
    imageUrl:
      "https://www.example.com/images/weihenstephaner-hefeweissbier.jpg",
    description:
      "A traditional German wheat beer with banana and clove aromas.",
    category: "Wheat",
    abv: 5.4,
    size: "12oz",
    brand: "Weihenstephaner",
    rating: 4.8,
    reviews: "A refreshing and flavorful wheat beer.",
    origin: "Germany",
    pairing: "Salads, seafood",
    availability: "In Stock",
  },
  {
    id: 30,
    name: "Estrella Damm",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/estrella-damm.jpg",
    description:
      "A crisp and refreshing Spanish lager with a slightly bitter finish.",
    category: "Lager",
    abv: 5.4,
    size: "12oz",
    brand: "Estrella Damm",
    rating: 4.6,
    reviews: "A well-balanced and refreshing lager.",
    origin: "Spain",
    pairing: "Tapas, seafood",
    availability: "In Stock",
  },
  {
    id: 31,
    name: "Asahi Black",
    price: 11.99,
    quantity: 90,
    imageUrl: "https://www.example.com/images/asahi-black.jpg",
    description: "A smooth and rich dark lager with roasted malt flavors.",
    category: "Dark Lager",
    abv: 5.5,
    size: "12oz",
    brand: "Asahi",
    rating: 4.6,
    reviews: "A well-balanced and flavorful dark lager.",
    origin: "Japan",
    pairing: "BBQ, roasted meats",
    availability: "In Stock",
  },
  {
    id: 32,
    name: "Birra Moretti",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/birra-moretti.jpg",
    description: "A smooth and balanced Italian lager with a mild flavor.",
    category: "Lager",
    abv: 4.6,
    size: "12oz",
    brand: "Birra Moretti",
    rating: 4.5,
    reviews: "A classic and refreshing Italian lager.",
    origin: "Italy",
    pairing: "Pasta, cheese",
    availability: "In Stock",
  },
  {
    id: 33,
    name: "Grolsch Premium Lager",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/grolsch-premium-lager.jpg",
    description: "A crisp and refreshing Dutch lager with a clean finish.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Grolsch",
    rating: 4.5,
    reviews: "A well-balanced and reliable lager.",
    origin: "Netherlands",
    pairing: "Cheese, seafood",
    availability: "In Stock",
  },
  {
    id: 34,
    name: "Leffe Brune",
    price: 12.99,
    quantity: 85,
    imageUrl: "https://www.example.com/images/leffe-brune.jpg",
    description: "A Belgian abbey beer with rich malt and caramel flavors.",
    category: "Brown Ale",
    abv: 6.5,
    size: "12oz",
    brand: "Leffe",
    rating: 4.7,
    reviews: "A smooth and flavorful Belgian ale.",
    origin: "Belgium",
    pairing: "Roasted meats, cheese",
    availability: "In Stock",
  },
  {
    id: 35,
    name: "Franziskaner Hefe-Weissbier",
    price: 11.99,
    quantity: 90,
    imageUrl: "https://www.example.com/images/franziskaner-hefe-weissbier.jpg",
    description:
      "A traditional German wheat beer with a fruity and spicy aroma.",
    category: "Wheat",
    abv: 5,
    size: "12oz",
    brand: "Franziskaner",
    rating: 4.7,
    reviews: "A refreshing and flavorful wheat beer.",
    origin: "Germany",
    pairing: "Salads, seafood",
    availability: "In Stock",
  },
  {
    id: 36,
    name: "Peroni Gran Riserva",
    price: 12.99,
    quantity: 90,
    imageUrl: "https://www.example.com/images/peroni-gran-riserva.jpg",
    description: "A premium Italian lager with a rich and full-bodied flavor.",
    category: "Lager",
    abv: 6.6,
    size: "12oz",
    brand: "Peroni",
    rating: 4.7,
    reviews: "A sophisticated and flavorful lager.",
    origin: "Italy",
    pairing: "Pasta, roasted meats",
    availability: "In Stock",
  },
  {
    id: 37,
    name: "Tiger Beer",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/tiger-beer.jpg",
    description: "A smooth and refreshing lager with a light malt flavor.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Tiger",
    rating: 4.5,
    reviews: "A popular and easy-drinking Asian lager.",
    origin: "Singapore",
    pairing: "Asian cuisine, seafood",
    availability: "In Stock",
  },
  {
    id: 38,
    name: "Mythos",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/mythos.jpg",
    description: "A light and refreshing Greek lager with a crisp finish.",
    category: "Lager",
    abv: 4.7,
    size: "12oz",
    brand: "Mythos",
    rating: 4.4,
    reviews: "A well-balanced and refreshing lager.",
    origin: "Greece",
    pairing: "Seafood, salads",
    availability: "In Stock",
  },
  {
    id: 39,
    name: "Skol",
    price: 9.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/skol.jpg",
    description: "A light and crisp Brazilian lager with a smooth finish.",
    category: "Lager",
    abv: 4.7,
    size: "12oz",
    brand: "Skol",
    rating: 4.3,
    reviews: "A popular and easy-drinking Brazilian beer.",
    origin: "Brazil",
    pairing: "BBQ, light snacks",
    availability: "In Stock",
  },
  {
    id: 40,
    name: "Pilsner Urquell",
    price: 11.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/pilsner-urquell.jpg",
    description:
      "A classic Czech pilsner with a balance of sweetness and bitterness.",
    category: "Pilsner",
    abv: 4.4,
    size: "12oz",
    brand: "Pilsner Urquell",
    rating: 4.7,
    reviews: "A well-balanced and refreshing pilsner.",
    origin: "Czech Republic",
    pairing: "Cheese, sausages",
    availability: "In Stock",
  },
  {
    id: 41,
    name: "Innis & Gunn Original",
    price: 12.99,
    quantity: 85,
    imageUrl: "https://www.example.com/images/innis-and-gunn-original.jpg",
    description:
      "A smooth and rich Scottish ale with vanilla and toffee notes.",
    category: "Ale",
    abv: 6.6,
    size: "12oz",
    brand: "Innis & Gunn",
    rating: 4.8,
    reviews: "A well-balanced and flavorful Scottish ale.",
    origin: "Scotland",
    pairing: "Roasted meats, cheese",
    availability: "In Stock",
  },
  {
    id: 42,
    name: "Kronenbourg 1664",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/kronenbourg-1664.jpg",
    description:
      "A crisp and refreshing French lager with a slightly bitter finish.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Kronenbourg",
    rating: 4.5,
    reviews: "A well-balanced and easy-drinking French lager.",
    origin: "France",
    pairing: "Seafood, cheese",
    availability: "In Stock",
  },
  {
    id: 43,
    name: "Efes Pilsener",
    price: 10.99,
    quantity: 110,
    imageUrl: "https://www.example.com/images/efes-pilsener.jpg",
    description: "A smooth and refreshing Turkish lager with a clean finish.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Efes",
    rating: 4.4,
    reviews: "A popular and easy-drinking Turkish beer.",
    origin: "Turkey",
    pairing: "Mediterranean cuisine, light snacks",
    availability: "In Stock",
  },
  {
    id: 44,
    name: "Castle Lager",
    price: 9.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/castle-lager.jpg",
    description:
      "A crisp and refreshing South African lager with a smooth finish.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Castle",
    rating: 4.4,
    reviews: "A well-balanced and refreshing lager.",
    origin: "South Africa",
    pairing: "BBQ, light snacks",
    availability: "In Stock",
  },
  {
    id: 45,
    name: "Tyskie",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/tyskie.jpg",
    description: "A smooth and well-balanced Polish lager with a clean finish.",
    category: "Lager",
    abv: 5.6,
    size: "12oz",
    brand: "Tyskie",
    rating: 4.5,
    reviews: "A popular and easy-drinking Polish beer.",
    origin: "Poland",
    pairing: "Sausages, cheese",
    availability: "In Stock",
  },
  {
    id: 46,
    name: "Baltika 7",
    price: 10.99,
    quantity: 100,
    imageUrl: "https://www.example.com/images/baltika-7.jpg",
    description: "A smooth and refreshing Russian lager with a clean finish.",
    category: "Lager",
    abv: 5.4,
    size: "12oz",
    brand: "Baltika",
    rating: 4.4,
    reviews: "A well-balanced and refreshing lager.",
    origin: "Russia",
    pairing: "BBQ, light snacks",
    availability: "In Stock",
  },
  {
    id: 47,
    name: "Cusqueña",
    price: 9.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/cusquena.jpg",
    description:
      "A smooth and well-balanced Peruvian lager with a clean finish.",
    category: "Lager",
    abv: 5,
    size: "12oz",
    brand: "Cusqueña",
    rating: 4.3,
    reviews: "A popular and easy-drinking Peruvian beer.",
    origin: "Peru",
    pairing: "Seafood, light snacks",
    availability: "In Stock",
  },
  {
    id: 48,
    name: "Tusker",
    price: 9.99,
    quantity: 120,
    imageUrl: "https://www.example.com/images/tusker.jpg",
    description: "A smooth and well-balanced Kenyan lager with a clean finish.",
    category: "Lager",
    abv: 4.2,
    size: "12oz",
    brand: "Tusker",
    rating: 4.3,
    reviews: "A popular and easy-drinking Kenyan beer.",
    origin: "Kenya",
    pairing: "BBQ, light snacks",
    availability: "In Stock",
  },
  {
    id: 49,
    name: "Moretti La Rossa",
    price: 12.99,
    quantity: 90,
    imageUrl: "https://www.example.com/images/moretti-la-rossa.jpg",
    description: "A rich and malty Italian double bock with a smooth finish.",
    category: "Double Bock",
    abv: 7.2,
    size: "12oz",
    brand: "Moretti",
    rating: 4.7,
    reviews: "A well-balanced and flavorful Italian beer.",
    origin: "Italy",
    pairing: "Roasted meats, cheese",
    availability: "In Stock",
  },
  {
    id: 50,
    name: "La Chouffe",
    price: 13.99,
    quantity: 80,
    imageUrl: "https://www.example.com/images/la-chouffe.jpg",
    description: "A strong Belgian golden ale with a fruity and spicy aroma.",
    category: "Golden Ale",
    abv: 8,
    size: "12oz",
    brand: "La Chouffe",
    rating: 4.8,
    reviews: "A well-crafted and complex Belgian ale.",
    origin: "Belgium",
    pairing: "Cheese, roasted meats",
    availability: "In Stock",
  },
];

module.exports = importedBeers;
