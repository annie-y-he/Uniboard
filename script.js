keymap = {
  'a': 0,
  's': 1,
  'd': 2,
  'f': 3,
  'q': 4,
  'w': 5,
  'e': 6,
  'r': 7,
  'z': 8,
  'x': 9,
  'c': 10,
  'v': 11,
  ' ': 12,
  'm': 13,
  ',': 14,
  '.': 15,
  '/': 16,
  'u': 17,
  'i': 18,
  'o': 19,
  'p': 20,
  'j': 21,
  'k': 22,
  'l': 23,
  ';': 24,
}

alph = [
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
  "กาขาฃาคาฅาฆางาจาฉาชาซาฌาญาฎาฏาฐาฑาฒาณาดาตาถาทาธานาบาปาผาฝาพาฟาภามายาราลาวาศาษาสาหาฬาอาฮา",
  "的我你是了不在他有这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学之都好看起发成业外相",
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzÄäÖöÜüẞß"
]

sentence = [
  "The quick brown fox jumps over the lazy dog"
]

Promise.all([
  fetch('https://annie-he.com/files/mapping3.json').then(response => response.json()),
  fetch('https://annie-he.com/files/mapping2.json').then(response => response.json())
])
.then(([data1, data2]) => {
  down = new Array(25).fill("0");
  board = document.querySelector("#board")
  demoText = document.querySelector("#demo-text")
  demoFixed = document.querySelector("#demo-fixed")
  demo = document.querySelector("#demo")
  button = document.querySelector("button")
  highlight = document.querySelector("#highlight")
  text = ""
  display = document.querySelector("#char")
  ready = document.querySelector("#ready")

  ready.textContent = "Ready!!!"

  button.addEventListener("click", () => {
    if (button.textContent == "start") {
      text = demoText.value
      button.textContent = "edit"
      try {
        demo.textContent = data1[text.codePointAt(0).toString()];
      } catch (e) {
        demo.textContent = data1[0];
      }
      demoFixed.children[0].textContent = ""
      demoFixed.children[1].textContent = text
      demoFixed.children[0].style.backgroundColor = "powderblue"
      demoFixed.children[1].textContent = text
      demoText.style.display = "none"
      demoFixed.style.display = "block"
    } else {
      button.textContent = "start"
      demoText.style.display = "block"
      demoFixed.style.display = "none"
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.target.tagName == 'BUTTON') {
      event.preventDefault();
    }
    down[keymap[event.key]] = "1"
    board.textContent = data1[data2[down.join("")].toString()]
    if (board.textContent == demo.textContent) {
      sliceLen = 1
      if (demoFixed.children[1].textContent[0] >= '\uD800' && demoFixed.children[1].textContent[0] <= '\uDBFF') {
        sliceLen = 2
      }
      demoFixed.children[0].textContent += demoFixed.children[1].textContent[0]
      demoFixed.children[1].textContent = demoFixed.children[1].textContent.slice(sliceLen)
      if (demoFixed.children[1].textContent == "") {
        demoFixed.children[0].textContent = ""
        demoFixed.children[1].textContent = text
      }
      demo.textContent = data1[demoFixed.children[1].textContent.codePointAt(0).toString()];
    }
    display.textContent = String.fromCodePoint(data2[down.join("")])
    console.log(data2[down.join("")])
  });

  document.addEventListener("keyup", (event) => {
    down[keymap[event.key]] = "0"
    board.textContent = data1[data2[down.join("")].toString()]
    display.textContent = String.fromCodePoint(data2[down.join("")])
  });
})
.catch(error => {
  console.error("Failed to fetch:", error);
});
