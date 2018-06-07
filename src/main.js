const renderGrid = require('./render-grid')
const emotions = require('./emotion-list')
const renderGraph = require('./render-graph')

renderGrid(emotions);
renderGraph();

document.querySelector('#saveName').addEventListener("click", saveName)
document.querySelector('#saveName').addEventListener("click", updateGraph)

function saveName(event) {
  event.preventDefault()
  const loginName = document.querySelector('#modalName').value
  localStorage.setItem("name", loginName)

  $('#exampleModalCenter').modal('hide')
}

function updateGraph (event) {
  renderGraph()
}
