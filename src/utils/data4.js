const data4 = [
  { id: 1, img: "https://i.ibb.co/BstJfjB/row-1-column-1.jpg" },
  { id: 2, img: "https://i.ibb.co/fCrPk8k/row-1-column-2.jpg" },
  { id: 3, img: "https://i.ibb.co/ncvfbnc/row-1-column-3.jpg" },
  { id: 4, img: "https://i.ibb.co/441TV5J/row-1-column-4.jpg" },
  { id: 5, img: "https://i.ibb.co/frbJVds/row-2-column-1.jpg" },
  { id: 6, img: "https://i.ibb.co/XLcP8r3/row-2-column-2.jpg" },
  { id: 7, img: "https://i.ibb.co/vL3GphK/row-2-column-3.jpg" },
  { id: 8, img: "https://i.ibb.co/XsbynVn/row-2-column-4.jpg" },
  { id: 9, img: "https://i.ibb.co/jVVm32m/row-3-column-1.jpg" },
  { id: 10, img: "https://i.ibb.co/HgWW2cj/row-3-column-2.jpg" },
  { id: 11, img: "https://i.ibb.co/mbJ2C1r/row-3-column-3.jpg" },
  { id: 12, img: "https://i.ibb.co/mXd37QP/row-3-column-4.jpg" },
  { id: 13, img: "https://i.ibb.co/Ns71gPj/row-4-column-1.jpg" },
  { id: 14, img: "https://i.ibb.co/Fnddnk3/row-4-column-2.jpg" },
  { id: 15, img: "https://i.ibb.co/JzQZcwY/row-4-column-3.jpg" },
  { id: 16, img: "https://i.ibb.co/3rD5Wrc/row-4-column-4.jpg" }
];
function getRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}


function swapper() {
  let index1 = getRandomNumber(data4.length) - 1;
  let index2 = getRandomNumber(data4.length) - 1;
  let temp = data4[index1]
  data4[index1] = data4[index2]
  data4[index2] = temp
}

for (let i = 0; i<30; i++) {
  swapper()
}

export default data4;
