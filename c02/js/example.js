// create variable for the welcome message
let greeting = 'Howdy ';
const name = 'Molly';
const message = ', please check your order;';
// concatenate the three variable above to create the welcome message
const welcome = greeting + name + message;

// variables to hold details for the sign
const sign = 'Montague House';
const tiles = sign.length;
const subTotal = tiles * 5;
const shipping = 7;
const grandTotal = subTotal + shipping;

// get the element that has ID of greeting
let el = document.getElementById('greeting');
//  replace the content of the element with personalised message
el.textContent = welcome;

const elSign = document.getElementById('userSign');
elSign.textContent = sign

const elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

const elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '£' + subTotal;

const elShipping = document.getElementById('shipping');
elShipping.textContent = '£' + shipping;

const elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '£' + grandTotal;