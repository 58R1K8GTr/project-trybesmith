const productMocksWithoutId = [
  {
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "userId": 1
  },
  {
    "name": "aposdifj",
    "price": "apsdiofj",
    "userId": 2
  }
]

const productMocksWithId = [
  { id: 1, ...productMocksWithoutId[0] },
  { id: 2, ...productMocksWithoutId[1] }
]

export { productMocksWithoutId, productMocksWithId };