function sortHighToLow(arr) {
  return arr.sort((a, b )=> b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
    { id: 5, price: 310 },
  ])
);
