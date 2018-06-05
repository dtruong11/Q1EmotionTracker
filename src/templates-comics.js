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
