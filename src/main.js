const renderGrid = require('./render-grid')
const emotions = require('./emotion-list')

renderGrid(emotions);

document.querySelector('#saveName').addEventListener("click", saveName)

function saveName (event){
   event.preventDefault()
   const loginName = document.querySelector('#modalName').value
   localStorage.setItem("name", loginName)
}

//Save like rate to local storage
// document.querySelector('.thumbsUp').addEventListener('click', like)
//
// function like (event) {
//   const countUpStr = localStorage.getItem('countUp')
//     if (countUpStr) {
//     const countUps = JSON.parse(localStorage.getItem("countUp"));
//     countUps ++
//   }
//
// }
