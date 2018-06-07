const templatesComics = require('./templates-comics')
const templatesVideos = require("./templates-videos")
const moodRating = require("./mood-rating")

const urls = require('./urls')
let moment = require('moment')

const renderEmo = (emotion) => {
  const urlEmo = urls[emotion]

  const string =
    `<div class="${emotion} text-center">
    <img src="/emotions/${emotion}.PNG" width="110px" alt="${emotion}">
    <h6 class="display-4">You are ${emotion}, then me too.</h6>
  </div>

  ${templatesVideos.checkOutVideos(urlEmo)}
  ${templatesComics.checkOutComics(emotion)}

  <div class="ask text-center mt-4">
    <p class="big-text">Do you feel better now?</p>
    <span>
      <i class="far fa-thumbs-up  thumbsUp"></i>
      <i class="far fa-thumbs-down  thumbsDown"></i>
    </span>
  <br>

  <!-- Button trigger modal -->
<button type="button" class="btn btn-outline-success btn-sm center mb-3 mt-3" data-toggle="modal" data-target="#Modal">
  save emotion
</button>

<!-- Modal -->
<div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title" id="ModalTitle">save my feeling</h6>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form id="myForm" >
        <div class="form-group">
        <label class="control-label " for="date" id="date">
         ${moment().format('LL')}
        </label>
        <label class="control-label " for="time" id="time">
         ${moment().format('LT')}
        </label>
         <div class="form-group">
          <input id="userNote" class="form-control form-control-sm" type="text" placeholder="your note" maxlength="30">
          <div>
        </div>
       </div>
       <button class="btn btn-primary btn-sm mt-3" name="submit" id="date-time" type="submit">
       Submit
       </button>
      </form>
   </div>
  </div>
 </div>
    `
  document.querySelector('#emoticons').innerHTML = string;

  function saveData(event) {
    event.preventDefault()
    let currentDate = document.querySelector('#date').innerHTML.trim()
    let currentTime = document.querySelector('#time').innerHTML.trim()
    let score = moodRating[emotion]
    let note = document.querySelector('#userNote').value
    const dataObj = {
      "currentTime": currentTime,
      "score": score,
      "note": note
    }

    //check in local storage, if exists, parse/ if not, create data
    let dataString = localStorage.getItem('data')
    function findCurrentDate () {
      const value = JSON.parse(dataString).find(obj => obj[currentDate])

    }
    if (dataString && JSON.parse(dataString).find(obj => obj[currentDate])) {
      const data = JSON.parse(dataString)


      data[currentDate].push(dataObj)
      localStorage.setItem("data", JSON.stringify([data]))

    } else {
      const data = []
      const nestedDateTime = {currentDate : [dataObj]}
      data.push(nestedDateTime)
      localStorage.setItem("data", JSON.stringify(data))
    }
  }
  document.querySelector('#myForm').addEventListener('submit', saveData)
}



module.exports = renderEmo;
