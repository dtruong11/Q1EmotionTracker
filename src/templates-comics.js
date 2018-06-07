function comic(emotion, index) {
  return `
  <div class="col">
    <img src="/comics/${emotion}/${emotion}${index}.jpg" alt="${emotion}${index}" class="comics" width="100%">
  </div>
  `
}

function checkOutComics(emotion) {
  let result = ""
  for (let i = 1; i <= 4; i++) {
    result += comic(emotion, i)
  }

  return `
  <p class="text-center big-text">Check out these comic strips</p>
    <div class="container">
      <div class="row">
      ${result}
      </div>
    </div>
`
}

module.exports = {
  comic,
  checkOutComics
}
