const templatesComics = require('./templates-comics')
const templatesVideos = require("./templates-videos")
const moodRating = require("./mood-rating")
const renderGraph = require("./render-graph")

const urls = require('./urls')
let moment = require('moment')

const renderEmo = (emotion) => {
  const urlEmo = urls[emotion]
  const thisMoment = moment()

  const emoticonContent =
    `<div class="${emotion} text-center">
    <img src="/emotions/${emotion}.PNG" width="110px" alt="${emotion}">
    <h6 class="display-4">You are ${emotion}, then me too.</h6>
  </div>

  ${templatesVideos.checkOutVideos(urlEmo)}
  ${templatesComics.checkOutComics(emotion)}

  <div class="ask text-center mt-4">


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
         ${thisMoment.format('LL')}
        </label>
        <label class="control-label " for="time" id="time">
         ${thisMoment.format('LT')}
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
  document.querySelector('#emoticons').innerHTML = emoticonContent;

  document.querySelector('#myForm').addEventListener('submit', saveData)
  document.querySelector('#myForm').addEventListener('submit', updateGraph)

  function updateGraph(event) {
    renderGraph()
  }

  function saveData(event) {
    event.preventDefault()

    let note = document.querySelector('#userNote').value
    const millisThisMoment = thisMoment.valueOf().toString()
    const newData = {
      "score": moodRating[emotion],
      "emotion": emotion,
      "note": note
    }

    //check in local storage, if exists, parse/ if not, create data
    let data = JSON.parse(localStorage.getItem('data'))
    if (!data) {
      data = {}
    }
    data[millisThisMoment] = newData
    localStorage.setItem("data", JSON.stringify(data))
  }
}

module.exports = renderEmo;
