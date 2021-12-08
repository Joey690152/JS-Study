let inStock;
inStock = true;

let shipping;
shipping = false;

/* changed to let for a more realistic approach. let variables you can change as done in this example where as const you cannot change further down the line */

inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = Document.getElementById('shipping');
elShip.className = shipping;
