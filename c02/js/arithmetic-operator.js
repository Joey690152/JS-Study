const subtotal = (13+1) * 5;
const shipping = 0.5 * (13 + 1);

const total = subtotal + shipping;

const elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

const elShip = document.getElementById('shipping');
elShip.textContent = shipping;

const elTotal = document.getElementById('total');
elTotal.textContent = total;

