const temp = require('./template-grid')

function renderGrid (emotions) {
  document.body.innerHTML += `${temp.templateGrid(emotions)}`
}

module.exports = renderGrid;
