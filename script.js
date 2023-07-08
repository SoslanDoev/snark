const died = [
  "Снарк умер",
  "Снарк уснул в канализации",
  "Снарк умер в канаве",
  "Снарк переночевал в притоне",
  "Снарка съел дракон",
  "Снарка унес орел",
  "Снарка унес аист",
  "Снарк умер от старости",
  "Снарка застрелил скелет",
  "Снарка взорвало",
  "Снарка убила магия",
  "Снарк умер от голода",
  "Снарк не успел добежать до дома",
  "Снарк перенапрягся и потерял сознание",
  "Снарк исчерпал все силы и потерял сознание",
]

let title = document.querySelector(".title")
let status = document.querySelector(".status")
const start = () => {
  const error = () => alert("Ошибка. Неверные данные!")
  try {
    const x = parseInt(document.querySelector("#input-x").value)
    if (!x) { error(); return }
    const s = parseInt(document.querySelector("#input-s").value)
    if (!s) { error(); return }
    let bunsText = document.querySelector("#input-buns").value
    let buns = bunsText.split(" ").map(Number)
    console.log(x, s, buns)
    let res = main(x, s, buns)
    if (res.status === "Yes") {
      // status.innerHTML = JSON.stringify(res) 
      let max = died.length - 1
      let min = 0
      let rand = Math.floor(min + Math.random() * (max + 1 - min))
      title.innerHTML = died[rand] + " :("
    } else {
      // status.innerHTML = JSON.stringify(res) 
      title.innerHTML = res.title
    }
  } catch {
    error()
  }
}


const main = (X, S, buns) => {
  const noFunc = () => {
    return {status: "No", title: "Снарк дома :)"}
  }
  const yesFunc = () => {
    return {status: "Yes", title: "Снарк умер :("}
  }
  if (buns.length === 0) return noFunc()
  let length = 0, maxLength = 0
  buns = buns.sort((a, b) => a - b)
  for (let i = 0; i < buns.length - 1; i++) {
    if (buns[i + 1] - buns[i] === 1) {
      length += 1
      maxLength = Math.max(length, maxLength)
    } else length = 1
  }
  if (maxLength >= S) return  noFunc()
  for (let i = 0; i <= X - S; i++) {
    let time = (X - i) / S, count = 0
    for (let j of buns) {
      if (j > i + S) break
      else if (i < j && j <= (i + S)) count += 1
    }
    if (S - count > time) return  yesFunc()
  }
  return  noFunc()
}
// console.log("1", main(1, 1, []))
// console.log("2", main(10, 3, [8, 7, 9]))
// console.log("3", main(0, 100, []))
// console.log("4", main(0, 1, []))
// console.log("5", main(1, 100, []))
// console.log("6", main(10, 3, [8, 9]))
// console.log("7", main(10, 3, [7, 8]))
// console.log("8", main(10, 3, [1, 2, 8, 9]))
// console.log("9", main(10, 100, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
// console.log("10", main(10, 10, [1,2,3,4,5,6,7,8,9]))
// console.log("11", main(10, 5, [1, 2, 3, 4, 6, 7, 8, 9]))
// console.log("12", main(100, 10, [84, 2, 88, 11, 76, 36, 89, 90, 85, 26, 64, 54, 53, 39, 15, 16, 42, 62, 87, 38]))

const button = document.querySelector(".submit")
button.addEventListener("click", start)