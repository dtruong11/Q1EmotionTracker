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
const loginName = document.querySelector('#modalName').value

//add click event listner to thumbup, thumbdown
const thumbsUps = Array.from(document.querySelectorAll('.thumbsUp'))
const thumbsDowns = Array.from(document.querySelectorAll('.thumbsDown'))
thumbsDown.forEach((down) => {
  down.addEventListener("click", () => {
    //
  })
})
