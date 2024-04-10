const data3 = [
  { id: 1, img: "https://i.ibb.co/HgyzyhN/row-1-column-1.jpg" },
  { id: 2, img: "https://i.ibb.co/RbQns2G/row-1-column-2.jpg" },
  { id: 3, img: "https://i.ibb.co/4Y2LM5T/row-1-column-3.jpg" },
  { id: 4, img: "https://i.ibb.co/JCLwQ40/row-1-column-4.jpg" },
  { id: 5, img: "https://i.ibb.co/tHG9T6Z/row-2-column-1.jpg" },
  { id: 6, img: "https://i.ibb.co/tQLprsH/row-2-column-2.jpg" },
  { id: 7, img: "https://i.ibb.co/rkfDVmV/row-2-column-3.jpg" },
  { id: 8, img: "https://i.ibb.co/kBbSbYg/row-2-column-4.jpg" },
  { id: 9, img: "https://i.ibb.co/qgV5hZ7/row-3-column-1.jpg" },
  { id: 10, img: "https://i.ibb.co/bJ07Lgh/row-3-column-2.jpg" },
  { id: 11, img: "https://i.ibb.co/BgsndGH/row-3-column-3.jpg" },
  { id: 12, img: "https://i.ibb.co/61m3qh6/row-3-column-4.jpg" },
  { id: 13, img: "https://i.ibb.co/RBqb9W7/row-4-column-1.jpg" },
  { id: 14, img: "https://i.ibb.co/qNMPwH9/row-4-column-2.jpg" },
  { id: 15, img: "https://i.ibb.co/X76GgXd/row-4-column-3.jpg" },
  { id: 16, img: "https://i.ibb.co/vc7RGgT/row-4-column-4.jpg" }
];


function getRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}


function swapper() {
  let index1 = getRandomNumber(data3.length) - 1;
  let index2 = getRandomNumber(data3.length) - 1;
  let temp = data3[index1]
  data3[index1] = data3[index2]
  data3[index2] = temp
}

for (let i = 0; i<30; i++) {
  swapper()
}


export default data3;