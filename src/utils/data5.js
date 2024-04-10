function getRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

const data5 = [
  { id: 1, img: "https://i.ibb.co/RjsjJW6/row-1-column-1.jpg" },
  { id: 2, img: "https://i.ibb.co/0Dr7btn/row-1-column-2.jpg" },
  { id: 3, img: "https://i.ibb.co/99V483P/row-1-column-3.jpg" },
  { id: 4, img: "https://i.ibb.co/QXgDmcg/row-1-column-4.jpg" },
  { id: 5, img: "https://i.ibb.co/tbZN1b9/row-2-column-1.jpg" },
  { id: 6, img: "https://i.ibb.co/tbYs4qP/row-2-column-2.jpg" },
  { id: 7, img: "https://i.ibb.co/P9czh45/row-2-column-3.jpg" },
  { id: 8, img: "https://i.ibb.co/VYpysgF/row-2-column-4.jpg" },
  { id: 9, img: "https://i.ibb.co/CsjBKqB/row-3-column-1.jpg" },
  { id: 10, img: "https://i.ibb.co/KN6dypS/row-3-column-2.jpg" },
  { id: 11, img: "https://i.ibb.co/YP9Ntkm/row-3-column-3.jpg" },
  { id: 12, img: "https://i.ibb.co/9yhp0tj/row-3-column-4.jpg" },
  { id: 13, img: "https://i.ibb.co/34kbG7P/row-4-column-1.jpg" },
  { id: 14, img: "https://i.ibb.co/kBL7Sbj/row-4-column-2.jpg" },
  { id: 15, img: "https://i.ibb.co/2WSyd2w/row-4-column-3.jpg" },
  { id: 16, img: "https://i.ibb.co/fkJf5B6/row-4-column-4.jpg" },
];

function swapper() {
  let index1 = getRandomNumber(data5.length) - 1;
  let index2 = getRandomNumber(data5.length) - 1;
  let temp = data5[index1]
  data5[index1] = data5[index2]
  data5[index2] = temp
}

for (let i = 0; i<30; i++) {
  swapper()
}


export default data5;