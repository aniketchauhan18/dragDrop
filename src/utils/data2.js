const data2 = [
  { id: 1, img: "https://i.ibb.co/WH20Tt4/row-1-column-1.jpg" },
  { id: 2, img: "https://i.ibb.co/f0xkFgK/row-1-column-2.jpg" },
  { id: 3, img: "https://i.ibb.co/ZTpmvHf/row-1-column-3.jpg" },
  { id: 4, img: "https://i.ibb.co/sypSGd9/row-1-column-4.jpg" },
  { id: 5, img: "https://i.ibb.co/6nb6Nyc/row-2-column-1.jpg" },
  { id: 6, img: "https://i.ibb.co/71DLdVF/row-2-column-2.jpg" },
  { id: 7, img: "https://i.ibb.co/2tssxnz/row-2-column-3.jpg" },
  { id: 8, img: "https://i.ibb.co/Nr7BrWn/row-2-column-4.jpg" },
  { id: 9, img: "https://i.ibb.co/m0HdJ9X/row-3-column-1.jpg" },
  { id: 10, img: "https://i.ibb.co/bBx7Xv1/row-3-column-2.jpg" },
  { id: 11, img: "https://i.ibb.co/svT8zhf/row-3-column-3.jpg" },
  { id: 12, img: "https://i.ibb.co/k5yZhN4/row-3-column-4.jpg" },
  { id: 13, img: "https://i.ibb.co/Q9TZ0Ln/row-4-column-1.jpg" },
  { id: 14, img: "https://i.ibb.co/CP9zRd6/row-4-column-2.jpg" },
  { id: 15, img: "https://i.ibb.co/0KHbh6R/row-4-column-3.jpg" },
  { id: 16, img: "https://i.ibb.co/P5zHfsZ/row-4-column-4.jpg" }
];

function getRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}


function swapper() {
  let index1 = getRandomNumber(data2.length) - 1;
  let index2 = getRandomNumber(data2.length) - 1;
  let temp = data2[index1]
  data2[index1] = data2[index2]
  data2[index2] = temp
}

for (let i = 0; i<30; i++) {
  swapper()
}

export default data2;
