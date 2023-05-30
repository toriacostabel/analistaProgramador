// ejercicio 1
let numbers = [10, 15, 20, 25, 30, 35, 40];
console.log(numbers.filter((num) => num % 2 === 0 && num > 20));

// ejercicio 2
let fruits = ['manzana', 'banana', 'kiwi', 'pera'];
console.log(fruits.filter((fruta) => fruta.includes('a') && !fruta.includes('r')));

// ejercicio 3
let students = [
  { name: "Juan", age: 19 },
  { name: "Ana", age: 20 },
  { name: "Sofia", age: 21 },
];
console.log(students.filter((students) => students.age >= 20));

// ejercicio 4
let productos = [
  { name: "celular", price: 700, cat: "electronica" },
  { name: "remera", price: 25, cat: "ropa" },
  { name: "auriculares", price: 150, cat: "electronica" },
  { name: "audifonos", price: 100, cat: "electronica" },
  { name: "sandalias", price: 50, cat: "ropa" },
];
console.log(
  productos.filter((prod) => prod.cat === "electronica" && prod.price > 100)
);

// ejercicio 5
let strings = ["hola", "", "mundo", "", "javascript"];
let minusEmpty = strings.filter((str) => str !== "");
console.log(minusEmpty);

// ejercicio 6
let divisibles = numbers.filter((num) => num % 5 === 0 && num % 10 !== 0);
console.log(divisibles);

// ejercicio 7
let words = ["hola", "que", "tal", "como", "has", "estado"];
console.log(words.filter((word) => word.length > 5));

// ejercicio 8
let stocks = [
  { name: "celular", price: 700, cat: "electronica", inStock: true },
  { name: "remera", price: 25, cat: "ropa", inStock: true },
  { name: "auriculares", price: 150, cat: "electronica", inStock: false },
  { name: "audifonos", price: 100, cat: "electronica", inStock: false },
  { name: "sandalias", price: 50, cat: "ropa", inStock: true },
];
console.log(stocks.filter((product) => product.inStock));

// ejercicio 9
console.log(
  stocks.filter((precio) => precio.price >= 50 && precio.price <= 200)
);

// ejercicio 10
let frutas = ["manzana", "banana", "frutilla", "mango", "mandarina", "pera"];
console.log(
  frutas.filter((fruit) => fruit.startsWith("m") && fruit.endsWith("a"))
);

// ejercicio 11
console.log(
  stocks.filter(
    (stock) =>
      stock.cat === "electronica" &&
      stock.price !== 200 &&
      stock.inStock
  )
);
