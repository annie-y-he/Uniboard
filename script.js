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
  "With this keyboard, you can type any Unicode character instantly. - English",
  "Con este teclado, puedes teclear cualquier carácter Unicode al instante. - Spanish",
  "Avec ce clavier, vous pouvez taper n'importe quel caractère Unicode instantanément. - French",
  "このキーボードを使えば、任意のUnicode文字を即座に入力できます。- Japanese",
  "Mit dieser Tastatur können Sie sofort jedes Unicode-Zeichen eingeben. - German",
  "इस कीबोर्ड के साथ, आप तुरंत कोई भी यूनिकोड चरित्र टाइप कर सकते हैं। - Hindi",
  "Com este teclado, você pode digitar qualquer caractere Unicode instantaneamente. - Portuguese",
  "С этой клавиатурой вы можете мгновенно вводить любой символ Unicode. - Russian",
  "Con questa tastiera, puoi digitare qualsiasi carattere Unicode all'istante. - Italian",
  "使用这个键盘，你可以立即输入任何Unicode字符。- Chinese",
  "Bu klavye ile herhangi bir Unicode karakterini anında yazabilirsiniz. - Turkish",
  "Med detta tangentbord kan du skriva in vilket Unicode-tecken som helst på ett ögonblick. - Swedish",
  "Met dit toetsenbord kunt u direct elk Unicode-teken typen. - Dutch",
  "S touto klávesnicí můžete okamžitě psát jakýkoli znak Unicode. - Czech",
  "Med dette tastaturet kan du umiddelbart skrive hvilken som helst Unicode-tegn. - Norwegian",
  "Na tej klawiaturze możesz natychmiast wpisać dowolny znak Unicode. - Polish",
  "Selle klaviatuuriga saate kohe sisestada ükskõik millise Unicode tähemärgi. - Estonian",
  "ด้วยคีย์บอร์ดนี้ คุณสามารถพิมพ์อักขระ Unicode ใดก็ได้ทันที - Thai",
  "Με αυτό το πληκτρολόγιο, μπορείτε να πληκτρολογήσετε οποιονδήποτε χαρακτήρα Unicode αμέσως. - Greek",
  "Ezzel a billentyűzettel azonnal beírhat bármely Unicode karaktert. - Hungarian",
  "이 키보드로는 모든 유니코드 문자를 즉시 입력할 수 있습니다. - Korean",
  "با این صفحه کلید، شما می‌توانید به سرعت هر کاراکتر یونیکدی را تایپ کنید. - Persian",
  "यस किबोर्डमा तपाईं तत्काल कुनै पनि युनिकोड अक्षर टाइप गर्न सक्नुहुन्छ। - Nepali",
  "ამ კლავიატურაზე თქვენ შეგიძლიათ მყისიერად შეიყვანოთ ნებისმიერი უნიკოდის სიმბოლო. - Georgian",
  "இந்த கீபோர்டுடன், நீங்கள் எந்த யுனிகோட் எழுத்தையும் உடனடியாக தட்டச்சு செய்ய முடியும். - Tamil",
  "এই কীবোর্ডের মাধ্যমে আপনি মুহূর্তে যেকোনো ইউনিকোড অক্ষর টাইপ করতে পারবেন। - Bengali",
  "هذا لوحة المفاتيح، يمكنك كتابة أي حرف يونيكود على الفور. - Arabic",
  "ਇਸ ਕੀਬੋਰਡ ਨਾਲ, ਤੁਸੀਂ ਕੋਈ ਵੀ ਯੂਨੀਕੋਡ ਅੱਖਰ ਤੁਰੰਤ ਟਾਈਪ ਕਰ ਸਕਦੇ ਹੋ। - Punjabi",
  "ជាមួយក្តារចុចនេះ អ្នកអាចវាយអក្សរយូនីកូដណាមួយភ្លាមៗ។ - Khmer",
  "עם מקלדת זו, תוכל להקליד כל תו יוניקוד מיד. - Hebrew",
  "👩‍💻👉⌨️🌟🔠🔡🔢🌏💫🚀⏩",
  "(ﾉ^_^)ﾉ[xxxx x xxxx]នីอั键き"
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
  startButton = document.querySelector("#start")
  alphButton = document.querySelector("#alph")
  sentenceButton = document.querySelector("#sentence")
  highlight = document.querySelector("#highlight")
  text = ""
  display = document.querySelector("#char")
  ready = document.querySelector("#ready")

  ready.textContent = "Ready!!!"

  startButton.addEventListener("click", () => {
    if (startButton.textContent == "start") {
      text = demoText.value
      startButton.textContent = "edit"
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
      startButton.textContent = "start"
      demoText.style.display = "block"
      demoFixed.style.display = "none"
    }
  });

  alphButton.addEventListener("click", () => {
    demoText.value = alph[Math.floor(Math.random() * alph.length)];
  });
  sentenceButton.addEventListener("click", () => {
    demoText.value = sentence[Math.floor(Math.random() * sentence.length)];
  });

  document.addEventListener("keydown", (event) => {
    if (event.target.tagName == 'BUTTON') {
      event.preventDefault();
    }
    down[keymap[event.key]] = "1"
    board.textContent = data1[data2[down.join("")].toString()]
    if (board.textContent == demo.textContent) {
      sliceLen = 1
      if (demoFixed.children[1].textContent.charCodeAt(0) >= 0xD800 && demoFixed.children[1].textContent.charCodeAt(0) <= 0xDBFF) {
        sliceLen = 2
      }
      console.log(sliceLen)
      demoFixed.children[0].textContent += demoFixed.children[1].textContent[0]
      demoFixed.children[1].textContent = demoFixed.children[1].textContent.slice(sliceLen)
      if (demoFixed.children[1].textContent == "") {
        demoFixed.children[0].textContent = ""
        demoFixed.children[1].textContent = text
      }
      demo.textContent = data1[demoFixed.children[1].textContent.codePointAt(0).toString()];
    }
    display.textContent = String.fromCodePoint(data2[down.join("")])
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
