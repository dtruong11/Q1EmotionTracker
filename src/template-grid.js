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
