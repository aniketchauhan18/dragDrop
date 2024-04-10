

const data1 = [
  { id: 3, img: "https://i.ibb.co/1sCKKGS/row-1-column-3.jpg" },
  { id: 4, img: "https://i.ibb.co/Qbv4ntw/row-1-column-4.jpg" },
  { id: 14, img: "https://i.ibb.co/5ndJQc7/row-4-column-2.jpg" },
  { id: 12, img: "https://i.ibb.co/MPvbtnF/row-3-column-4.jpg" },
  { id: 6, img: "https://i.ibb.co/z26CdTg/row-2-column-2.jpg" },
  { id: 7, img: "https://i.ibb.co/zVB5MXf/row-2-column-3.jpg" },
  { id: 8, img: "https://i.ibb.co/th0hPC9/row-2-column-4.jpg" },
  { id: 9, img: "https://i.ibb.co/grbw8VK/row-3-column-1.jpg" },
  { id: 10, img: "https://i.ibb.co/M71XbRV/row-3-column-2.jpg" },
  { id: 11, img: "https://i.ibb.co/MRBDqjz/row-3-column-3.jpg" },
  { id: 15, img: "https://i.ibb.co/X4Vd79B/row-4-column-3.jpg" },
  { id: 2, img: "https://i.ibb.co/HFYkCm9/row-1-column-2.jpg" },
  { id: 5, img: "https://i.ibb.co/s69dyGD/row-2-column-1.jpg" },
  { id: 1, img: "https://i.ibb.co/23qjCtY/row-1-column-1.jpg" },
  { id: 13, img: "https://i.ibb.co/5KB3M7b/row-4-column-1.jpg" },
  { id: 16, img: "https://i.ibb.co/2gk0NmP/row-4-column-4.jpg" },
]
function getRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}


function swapper() {
  let index1 = getRandomNumber(data1.length) - 1;
  let index2 = getRandomNumber(data1.length) - 1;
  let temp = data1[index1]
  data1[index1] = data1[index2]
  data1[index2] = temp
}

for (let i = 0; i<30; i++) {
  swapper()
}

export default data1