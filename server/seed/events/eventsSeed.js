const events = [
  {
    name: "Chardonnay & Cheese Pairing",
    description:
      "Explore the perfect pairings of Chardonnay with a selection of fine cheeses.",
    date: "2024-08-01",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Cabernet Sauvignon Tasting",
    description: "Sample a variety of rich and bold Cabernet Sauvignons.",
    date: "2024-08-08",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Merlot Appreciation Night",
    description: "Discover the smooth and flavorful world of Merlot.",
    date: "2024-08-15",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Pinot Noir and Artisan Chocolate",
    description:
      "Enjoy a delightful evening pairing Pinot Noir with artisan chocolates.",
    date: "2024-08-22",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Riesling & Sushi Pairing",
    description: "Experience the perfect combination of Riesling and sushi.",
    date: "2024-08-29",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Zinfandel Zest Night",
    description: "Savor the spicy and fruity flavors of Zinfandel.",
    date: "2024-09-05",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Syrah & Steak Evening",
    description: "Indulge in a robust Syrah paired with succulent steak.",
    date: "2024-09-12",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Sauvignon Blanc & Seafood Pairing",
    description:
      "Discover the crisp and refreshing taste of Sauvignon Blanc with seafood.",
    date: "2024-09-19",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Malbec Madness Night",
    description: "Enjoy the bold and rich flavors of Malbec.",
    date: "2024-09-26",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Rosé & Tapas Night",
    description: "Savor a variety of Rosé wines paired with delicious tapas.",
    date: "2024-10-03",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Chateau Margaux Tasting",
    description: "Experience the elegance of Chateau Margaux wines.",
    date: "2024-10-10",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Château Latour Appreciation Night",
    description: "Discover the rich history and flavors of Château Latour.",
    date: "2024-10-17",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Bordeaux Blends Evening",
    description: "Enjoy a night of classic Bordeaux blends.",
    date: "2024-10-24",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Champagne & Caviar Night",
    description: "Indulge in the luxurious pairing of Champagne and caviar.",
    date: "2024-10-31",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Beaujolais Nouveau Celebration",
    description: "Celebrate the release of Beaujolais Nouveau wines.",
    date: "2024-11-07",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Chablis & Shellfish Pairing",
    description:
      "Enjoy the crisp and mineral flavors of Chablis with shellfish.",
    date: "2024-11-14",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Tempranillo & Tapas Night",
    description: "Discover the bold flavors of Tempranillo paired with tapas.",
    date: "2024-11-21",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Chianti & Italian Cuisine Evening",
    description:
      "Experience the perfect pairing of Chianti and Italian cuisine.",
    date: "2024-11-28",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Barolo & Truffle Night",
    description: "Indulge in the rich flavors of Barolo paired with truffles.",
    date: "2024-12-05",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Shiraz & BBQ Night",
    description: "Enjoy the bold and spicy flavors of Shiraz with BBQ.",
    date: "2024-12-12",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Gewürztraminer & Spicy Food Pairing",
    description:
      "Discover the perfect combination of Gewürztraminer and spicy food.",
    date: "2024-12-19",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Port & Dessert Pairing",
    description: "Indulge in the sweet and rich flavors of Port with desserts.",
    date: "2024-12-26",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Prosecco & Brunch",
    description: "Enjoy a delightful brunch paired with Prosecco.",
    date: "2025-01-02",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Rhone Valley Reds Tasting",
    description: "Sample a variety of robust Rhone Valley red wines.",
    date: "2025-01-09",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Champagne & Jazz Night",
    description: "Enjoy an evening of Champagne and live jazz music.",
    date: "2025-01-16",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Sangiovese & Pasta Night",
    description:
      "Discover the perfect pairing of Sangiovese with pasta dishes.",
    date: "2025-01-23",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Carmenere & South American Cuisine",
    description:
      "Explore the flavors of Carmenere paired with South American cuisine.",
    date: "2025-01-30",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Petit Verdot Tasting",
    description: "Sample the rich and full-bodied flavors of Petit Verdot.",
    date: "2025-02-06",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Verdicchio & Seafood Night",
    description: "Enjoy the crisp flavors of Verdicchio paired with seafood.",
    date: "2025-02-13",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Grüner Veltliner & Austrian Delights",
    description:
      "Discover the unique flavors of Grüner Veltliner with Austrian cuisine.",
    date: "2025-02-20",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Albariño & Tapas Night",
    description: "Enjoy a night of Albariño wines paired with tapas.",
    date: "2025-02-27",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Viognier & Cheese Pairing",
    description:
      "Explore the aromatic and fruity flavors of Viognier with cheese.",
    date: "2025-03-06",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Nebbiolo & Italian Night",
    description: "Experience the bold flavors of Nebbiolo with Italian dishes.",
    date: "2025-03-13",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Cava & Tapas Evening",
    description: "Celebrate with Cava and a selection of delicious tapas.",
    date: "2025-03-20",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Chenin Blanc & Thai Cuisine",
    description:
      "Discover the versatile flavors of Chenin Blanc with Thai cuisine.",
    date: "2025-03-27",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Gamay & French Bistro Night",
    description:
      "Enjoy the light and fruity flavors of Gamay with French bistro dishes.",
    date: "2025-04-03",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Torrontes & Argentine Asado",
    description:
      "Explore the aromatic flavors of Torrontes with Argentine Asado.",
    date: "2025-04-10",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Fiano & Italian Seafood",
    description:
      "Indulge in the flavors of Fiano paired with Italian seafood dishes.",
    date: "2025-04-17",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Garnacha & Spanish Cuisine",
    description:
      "Discover the bold and fruity flavors of Garnacha with Spanish cuisine.",
    date: "2025-04-24",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Sauvignon Gris & Spring Salad",
    description:
      "Enjoy the crisp and refreshing taste of Sauvignon Gris with a spring salad.",
    date: "2025-05-01",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Carignan & Mediterranean Night",
    description:
      "Experience the rich flavors of Carignan with Mediterranean dishes.",
    date: "2025-05-08",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Lambrusco & Italian Antipasti",
    description: "Enjoy a night of Lambrusco paired with Italian antipasti.",
    date: "2025-05-15",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Montepulciano & Pasta Pairing",
    description:
      "Discover the bold flavors of Montepulciano with pasta dishes.",
    date: "2025-05-22",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Vinho Verde & Portuguese Seafood",
    description:
      "Explore the light and crisp flavors of Vinho Verde with Portuguese seafood.",
    date: "2025-05-29",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Pinot Grigio & Summer Salads",
    description:
      "Enjoy the refreshing taste of Pinot Grigio with summer salads.",
    date: "2025-06-05",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Graciano & Spanish Tapas",
    description:
      "Indulge in the bold flavors of Graciano paired with Spanish tapas.",
    date: "2025-06-12",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Vermentino & Italian Appetizers",
    description:
      "Experience the aromatic flavors of Vermentino with Italian appetizers.",
    date: "2025-06-19",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Tannat & South American BBQ",
    description:
      "Discover the robust flavors of Tannat with South American BBQ.",
    date: "2025-06-26",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Marsanne & Seafood Pairing",
    description: "Enjoy the rich flavors of Marsanne paired with seafood.",
    date: "2025-07-03",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Petit Manseng & Dessert Pairing",
    description: "Indulge in the sweet flavors of Petit Manseng with desserts.",
    date: "2025-07-10",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Alvarinho & Portuguese Tapas",
    description:
      "Explore the vibrant flavors of Alvarinho with Portuguese tapas.",
    date: "2025-07-17",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Glera & Summer Fruits",
    description:
      "Enjoy the light and fruity flavors of Glera with summer fruits.",
    date: "2025-07-24",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Dolcetto & Italian Cuisine",
    description:
      "Discover the bold flavors of Dolcetto paired with Italian cuisine.",
    date: "2025-07-31",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Blaufränkisch & Austrian Delights",
    description:
      "Experience the unique flavors of Blaufränkisch with Austrian dishes.",
    date: "2025-08-07",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Touriga Nacional & Portuguese Cuisine",
    description:
      "Explore the rich flavors of Touriga Nacional with Portuguese cuisine.",
    date: "2025-08-14",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Picpoul de Pinet & Seafood",
    description:
      "Enjoy the crisp flavors of Picpoul de Pinet paired with seafood.",
    date: "2025-08-21",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Lagrein & Italian Cuisine",
    description: "Discover the bold flavors of Lagrein with Italian cuisine.",
    date: "2025-08-28",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Trebbiano & Summer Salads",
    description: "Enjoy the refreshing taste of Trebbiano with summer salads.",
    date: "2025-09-04",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Nero d'Avola & Sicilian Night",
    description:
      "Indulge in the robust flavors of Nero d'Avola with Sicilian dishes.",
    date: "2025-09-11",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Pecorino & Italian Cheese Pairing",
    description:
      "Explore the unique flavors of Pecorino paired with Italian cheese.",
    date: "2025-09-18",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Negroamaro & Italian Cuisine",
    description:
      "Discover the bold flavors of Negroamaro with Italian cuisine.",
    date: "2025-09-25",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Viura & Spanish Cuisine",
    description:
      "Experience the crisp and refreshing taste of Viura with Spanish cuisine.",
    date: "2025-10-02",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Gaglioppo & Italian Antipasti",
    description: "Enjoy a night of Gaglioppo paired with Italian antipasti.",
    date: "2025-10-09",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Falanghina & Seafood Night",
    description:
      "Indulge in the crisp flavors of Falanghina paired with seafood.",
    date: "2025-10-16",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Bobal & Spanish Tapas",
    description:
      "Discover the bold flavors of Bobal paired with Spanish tapas.",
    date: "2025-10-23",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Frappato & Italian Cuisine",
    description:
      "Enjoy the light and fruity flavors of Frappato with Italian cuisine.",
    date: "2025-10-30",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Mencia & Spanish Night",
    description:
      "Explore the unique flavors of Mencia paired with Spanish dishes.",
    date: "2025-11-06",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Refosco & Italian Cuisine",
    description: "Indulge in the bold flavors of Refosco with Italian cuisine.",
    date: "2025-11-13",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Loureiro & Portuguese Seafood",
    description:
      "Discover the crisp flavors of Loureiro with Portuguese seafood.",
    date: "2025-11-20",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Furmint & Hungarian Delights",
    description:
      "Experience the unique flavors of Furmint with Hungarian dishes.",
    date: "2025-11-27",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Teroldego & Italian Cuisine",
    description: "Enjoy the bold flavors of Teroldego with Italian cuisine.",
    date: "2025-12-04",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Ruché & Italian Antipasti",
    description:
      "Discover the unique flavors of Ruché paired with Italian antipasti.",
    date: "2025-12-11",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Susumaniello & Italian Night",
    description:
      "Indulge in the robust flavors of Susumaniello with Italian dishes.",
    date: "2025-12-18",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Arneis & Seafood Pairing",
    description: "Explore the crisp flavors of Arneis paired with seafood.",
    date: "2025-12-25",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Bianco d'Alessano & Italian Cuisine",
    description:
      "Enjoy the light and refreshing taste of Bianco d'Alessano with Italian cuisine.",
    date: "2026-01-01",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Pallagrello Bianco & Cheese Pairing",
    description:
      "Discover the unique flavors of Pallagrello Bianco with cheese.",
    date: "2026-01-08",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Verduzzo & Italian Cuisine",
    description:
      "Indulge in the rich flavors of Verduzzo paired with Italian dishes.",
    date: "2026-01-15",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Raboso & Italian Antipasti",
    description:
      "Explore the bold flavors of Raboso paired with Italian antipasti.",
    date: "2026-01-22",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Cesanese & Italian Night",
    description: "Enjoy the unique flavors of Cesanese with Italian dishes.",
    date: "2026-01-29",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Cococciola & Seafood Pairing",
    description:
      "Discover the crisp flavors of Cococciola paired with seafood.",
    date: "2026-02-05",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Durella & Italian Cuisine",
    description:
      "Indulge in the unique flavors of Durella paired with Italian dishes.",
    date: "2026-02-12",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Erbaluce & Seafood Night",
    description:
      "Experience the crisp flavors of Erbaluce paired with seafood.",
    date: "2026-02-19",
    location: "123 Vineyard Ave, Napa, CA",
  },
  {
    name: "Pecorello & Italian Cuisine",
    description:
      "Enjoy the light and refreshing taste of Pecorello with Italian dishes.",
    date: "2026-02-26",
    location: "123 Vineyard Ave, Napa, CA",
  },
];

module.exports = events;
