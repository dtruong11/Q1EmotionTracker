(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let emotions = ["happy", "sad", "mad", "brave", "embarrassed", "friendly", "sorry", "disappointed", "frustrated", "silly", "hopeful", "left-out", "excited", "jealous", "curious", "cranky", "insecure", "greatful", "loved", "guilty", "uncomfortable", "shy", "hurt", "surprised", "scared", "kind"]

module.exports = emotions;

},{}],2:[function(require,module,exports){
const renderEmo = require('./renderEmo')
const renderGrid = require('./render-grid')
const emotions = require('./emotion-list')

renderGrid(emotions);

//Add event listener to div containing images + render specific div
const arrEmo = Array.from(document.querySelectorAll('.emotion'))

arrEmo.forEach((emotion) => {
  emotion.addEventListener('click', () => {
    renderEmo(emotion)
  })
})

//get the input from the modal

},{"./emotion-list":1,"./render-grid":3,"./renderEmo":4}],3:[function(require,module,exports){
const temp = require('./template-grid')

function renderGrid (emotions) {
  document.body.innerHTML += `${temp.templateGrid(emotions)}`
}

module.exports = renderGrid;

},{"./template-grid":5}],4:[function(require,module,exports){
const templatesComics = require('./templates-comics')
const templatesVideos = require("./templates-videos")
const urls = require('./urls')

const renderEmo = (emotion) => {
  const urlEmo = urls[emotion]
    document.body.innerHTML +=
       `
      <div class="${emotion} text-center">
        <img src="/emotions/${emotion}.PNG" width="110px" alt="${emotion}">
        <h6 class="display-4">You are ${emotion}, then me too.</h6>

        ${templatesVideos.checkOutVideos(urlEmo)}
        ${templatesComics.checkOutComics(emotion)}

        <div class="ask">
          <p>Do you feel better now?</p>
          <span>
            <i class="far fa-thumbs-up" id="positive"></i>
            <i class="far fa-thumbs-down id="negative"></i>
          </span>
        </div>
      `

}

module.exports = renderEmo;

},{"./templates-comics":6,"./templates-videos":7,"./urls":8}],5:[function(require,module,exports){
const emotionGrid = (emotion) => {

  return `<div class="p-2 emotion  col-sm-6 col-md-4 col-lg-3 border border-warning" id="${emotion}">
            <img src="/emotions/${emotion}.PNG" width="60%" alt="${emotion}">
        </div>
        `
}

const templateGrid = (emotions) => {
  const grids = emotions.map(emotion =>  { return emotionGrid(emotion)}).join('')

  return `
  <div class="home">
    <div class="greeting">
      <h6 class="display-4">Hi</h6>
      <h6 class="display-4">How do you feel?</h6>
    </div>

    <div class="d-flex flex-wrap justify-content-center mt-4 text-center">
      ${grids}
    </div>
  </div>
  `
}

module.exports = {
  emotionGrid,
  templateGrid
}

},{}],6:[function(require,module,exports){
function comic(emotion, index) {
  return `
  <div class="col">
    <img src="/comics/${emotion}/${emotion}${index}.jpg" alt="${emotion}${index}" class="comics">
  </div>
  `
}

function checkOutComics(emotion) {
  let result = ""
  for (let i = 1; i <= 4; i++) {
    result += comic(emotion, i)
  }

  return `
  <p>Check out these comic strips</p>
    <div class="container">
      ${result}
    </div>
`
}

module.exports = {
  comic,
  checkOutComics
}

},{}],7:[function(require,module,exports){
function video(url) {
  return `
    <div class="col">
      <iframe width="80%" src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  `
}

function checkOutVideos(urlEmo) {
    const videoTags = urlEmo.map(url => video(url)).join('')

  //const videos = urls.map(url => video(url)).join('')

  return `
    <p>Check out these videos</p>
    <div class="container mb-2">
      <div class="row">
          ${videoTags}
      </div>
    </div>
  `
}

module.exports = {
  video,
  checkOutVideos
}

},{}],8:[function(require,module,exports){
let urls = {
  "happy": [
    "https://www.youtube.com/embed/MOWDb2TBYDg?ecver=1",
    "https://www.youtube.com/embed/uh4dTLJ9q9o?ecver=1",
    "https://www.youtube.com/embed/XyMQ-cgJrJo?ecver=1"
  ],
  "sad": [
    "https://www.youtube.com/embed/GmHzsXO1EZg?ecver=1",
    "https://www.youtube.com/embed/IdrDX0pGPsM?ecver=1",
    "https://www.youtube.com/embed/NV6RfexD_MQ?ecver=1"
  ],
  "mad": [
    "https://www.youtube.com/embed/KoMxM9JbKdY?ecver=1",
    "https://www.youtube.com/embed/RF-wFSvx7ig?ecver=1",
    "https://www.youtube.com/embed/bb22FV-tmg8?ecver=1"
  ],
  "brave": [
    "https://www.youtube.com/embed/QUQsqBqxoR4?ecver=1",
    "https://www.youtube.com/embed/NvR9YOpDG4A?ecver=1",
    "https://www.youtube.com/embed/PgCBVGBHGx4?ecver=1"
  ],
  "embarrassed": [
    "https://www.youtube.com/embed/9MW1OWcb39M?ecver=1",
    "https://www.youtube.com/embed/IfHHetAn-Fo?ecver=1",
    "https://www.youtube.com/embed/CSkYoJROwgU?ecver=1"
  ],
  "friendly": [
    "https://www.youtube.com/embed/O3npvris_TA?ecver=1",
    "https://www.youtube.com/embed/TQMns602_bg?ecver=1",
    "https://www.youtube.com/embed/xBXq_CmNaRI?ecver=1"
  ],
  "sorry": [
    "https://www.youtube.com/embed/HWMomwOgYKk?ecver=1",
    "https://www.youtube.com/embed/22pB5J_0Qms?ecver=1",
    "https://www.youtube.com/embed/z3H_GgtE3Tc?ecver=1"
  ],
  "disappointed": [
    "https://www.youtube.com/embed/-kfUE41-JFw?ecver=1",
    "https://www.youtube.com/embed/hBiiLqPP4VA?ecver=1",
    "https://www.youtube.com/embed/9KiUq8i9pbE?ecver=1"
  ],
  "frustrated": [
    "https://www.youtube.com/embed/bI9eAbr3Bjo?ecver=1",
    "https://www.youtube.com/embed/FV5AUAle2Zs?ecver=1",
    "https://www.youtube.com/embed/8jPQjjsBbIc?ecver=1"
  ],
  "silly": [
    "https://www.youtube.com/embed/6rWbj0y-S-A?ecver=1",
    "https://www.youtube.com/embed/xO8Cz-9qKTI?ecver=1",
    "https://www.youtube.com/embed/iPW75ZO4pIA?ecver=1"
  ],
  "hopeful": [
    "https://www.youtube.com/embed/wT3RhIJZu4k?ecver=1",
    "https://www.youtube.com/embed/6gsZ0nAkw8s?ecver=1",
    "https://www.youtube.com/embed/xEeFrLSkMm8?ecver=1"
  ],
  "left-out": [
    "https://www.youtube.com/embed/jubD5oinL3A?ecver=1",
    "https://www.youtube.com/embed/BjRRrG8Vr6I?ecver=1",
    "https://www.youtube.com/embed/THBBxtfMUh8?ecver=1"
  ],
  "excited": [
    "https://www.youtube.com/embed/TXwH3SIF9rc?ecver=1",
    "https://www.youtube.com/embed/gsYvmxks3KQ?ecver=1",
    "https://www.youtube.com/embed/cWiPROxS2HA?ecver=1"
  ],
  "jealous": [
    "https://www.youtube.com/embed/1rcqwRgVvvw?ecver=1",
    "https://www.youtube.com/embed/7tKZB2k14iY?ecver=1",
    "https://www.youtube.com/embed/uramctS1zJ0?ecver=1"
  ],
  "curious": [
    "https://www.youtube.com/embed/PDHIyrfMl_U?ecver=1",
    "https://www.youtube.com/embed/mO3Q4bRQZ3k?ecver=1",
    "https://www.youtube.com/embed/_7WMKmGdMIY?ecver=1"

  ],
  "cranky": [
    "https://www.youtube.com/embed/XubM62q9nlw?ecver=1",
    "https://www.youtube.com/embed/coiCkmcKjX8?ecver=1",
    "https://www.youtube.com/embed/2sGrSFa15eA?ecver=1"
  ],
  "insecure": [
    "https://www.youtube.com/embed/s2AUI-7GRJc?ecver=1",
    "https://www.youtube.com/embed/PW8U0FKnZ7c?ecver=1",
    "https://www.youtube.com/embed/xImqF2-oaf8?ecver=1"
  ],
  "greatful": [
    "https://www.youtube.com/embed/Nn6syyAaVtA?ecver=1",
    "https://www.youtube.com/embed/Eyfa1yR8tx0?ecver=1",
    "https://www.youtube.com/embed/JMd1CcGZYwU?ecver=1"
  ],
  "loved": [
    "https://www.youtube.com/embed/l6QR3NVUQuI?ecver=1",
    "https://www.youtube.com/embed/rHBQQjVAXAs?ecver=1",
    "https://www.youtube.com/embed/2REkk9SCRn0?ecver=1"
  ],
  "guilty": [
    "https://www.youtube.com/embed/wsgsQ_1QFBs?ecver=1",
    "https://www.youtube.com/embed/vktt2wurx6c?ecver=1",
    "https://www.youtube.com/embed/uoTIcwHK_aw?ecver=1"
  ],
  "uncomfortable": [
    "https://www.youtube.com/embed/cmN4xOGkxGo?ecver=1",
    "https://www.youtube.com/embed/2LNI-fwb7oE?ecver=1",
    "https://www.youtube.com/embed/Ir-ZcNePWk4?ecver=1"
  ],
  "shy": [
    "https://www.youtube.com/embed/d8hBTR8D3HY?ecver=1",
    "https://www.youtube.com/embed/DPiSFGrHCbE?ecver=1",
    "https://www.youtube.com/embed/2yRVP9PHnEE?ecver=1"
  ],
  "hurt": [
    "https://www.youtube.com/embed/-ZN2pg0fTp4?ecver=1",
    "https://www.youtube.com/embed/lGglw8eAikY?ecver=1",
    "https://www.youtube.com/embed/GfGN7bfohms?ecver=1"
  ],
  "surprised": [
    "https://www.youtube.com/embed/JNQU-4YEnm4?ecver=1",
    "https://www.youtube.com/embed/Pjwo3tf4q1o?ecver=1",
    "https://www.youtube.com/embed/hzVHqSpO8Ko?ecver=1"
  ],
  "scared": [
    "https://www.youtube.com/embed/b-r_o0wj_Sk?ecver=1",
    "https://www.youtube.com/embed/RtSS0SJE8oE?ecver=1",
    "https://www.youtube.com/embed/hnSdMrVZViM?ecver=1"
  ],
  "kind": [
    "https://www.youtube.com/embed/rwelE8yyY0U?ecver=1",
    "https://www.youtube.com/embed/vMeEKBaiPbg?ecver=1",
    "https://www.youtube.com/embed/yn9VxUPlC5g?ecver=1"
  ]
}


module.exports = urls;

},{}]},{},[2]);
