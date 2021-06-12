if (document.title.includes("Home")) {
  let wordSpans = document.getElementsByClassName('word');
  let words = [
    "User Experience Designer",
    "Full-Stack Web Developer",
    "Graphic & Visual Designer",
    "Digital Artist",
    "Amateur Pianist",
    "Animal Crossing Fanatic"
  ]
  let wordArray = [];
  let currentWord = 0;

  let pfp = document.getElementById('geraldine-img')
  pfp.addEventListener("mouseenter", (e) => {
    console.log(e)
    let pfpImg = e.target.children[0]
    pfpImg.src = '../assets/img/geraldine-silly.jpg'
  })
  pfp.addEventListener("mouseleave", (e) => {
    let pfpImg = e.target.children[0]
    pfpImg.src = '../assets/img/geraldine.jpg'
  })

  wordSpans[currentWord].style.opacity = 1;
  for (let i = 0; i < wordSpans.length; i++) {
    splitLetters(wordSpans[i], words[i]);
  }

  function changeWord() {
    let cw = wordArray[currentWord];
    let nw = currentWord == wordSpans.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (let i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
  }

  function animateLetterOut(cw, i) {
    setTimeout(function () {
      cw[i].className = 'letter out';
    }, i * 80);
  }

  function animateLetterIn(nw, i) {
    setTimeout(function () {
      nw[i].className = 'letter in';
    }, 340 + (i * 80));
  }

  function splitLetters(wordSpan, word) {
    wordSpan.innerHTML = '';
    let letters = [];
    word.split('').forEach((c) => {
      let letter = document.createElement('span');
      letter.className = 'letter';
      letter.innerHTML = c;
      wordSpan.appendChild(letter);
      letters.push(letter);
    })
    wordArray.push(letters);
  }

  changeWord();
  setInterval(changeWord, 4000);
}