const temp = require('./template-grid')
const renderEmo = require('./renderEmo')

function renderGrid(emotions) {
  document.querySelector('#home').innerHTML += `${temp.templateGrid(emotions)}`
  const arrEmo = Array.from(document.querySelectorAll('.emotion'))

  arrEmo.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      renderEmo(element.id)
      scrollTo(0, document.querySelector('#emoticons').getBoundingClientRect().y)
    })
  })
}

module.exports = renderGrid;
