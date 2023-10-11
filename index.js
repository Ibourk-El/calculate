let keys = document.querySelectorAll(".key");
let result = document.querySelector(".result");
let r = 0;
let strNum = 0;
let saveRamz = "";
result.innerText = "";
let bool = false;
let colors = ["red", "green", "blue", "yellow"];

keys.forEach((e) => {
  e.addEventListener("click", (e) => {
    let ramz = e.target.innerText;
    if (isNaN(+ramz)) {
      result.innerText += ramz;
      if (ramz === "Clear") {
        r = 0;
        result.innerText = "";
      }
      if (bool) {
        if (ramz === "=") {
          if (saveRamz === "+") r += strNum;
          if (saveRamz === "-") r -= strNum;
          if (saveRamz === "*") r *= strNum;
          if (saveRamz === "/") r /= strNum;
          result.innerText = r;
        } else {
          saveRamz = ramz;
        }
      } else {
        r = strNum;
        saveRamz = ramz;
        bool = true;
      }
      strNum = 0;
      //   result.innerText = r;
    } else {
      result.innerText += e.target.innerText;
      strNum += +ramz;
    }
  });
});

function colorRandem() {
  document.querySelector(
    ".box"
  ).style.backgroundImage = `linear-gradient(to top , ${
    colors[Math.floor(Math.random() * 4)]
  },${colors[Math.floor(Math.random() * 4)]},${
    colors[Math.floor(Math.random() * 4)]
  },${colors[Math.floor(Math.random() * 4)]})`;
  
}

setInterval(colorRandem, 1000);
