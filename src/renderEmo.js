const templatesComics = require('./templates-comics')
const templatesVideos = require("./templates-videos")
const urls = require('./urls')

const renderEmo = (emotion) => {
  const urlEmo = urls[emotion]
    document.body.innerHTML +=
       `
      <div class="${emotion} text-center">
        <img src="/emotions/${emotion}.PNG" width="110px" alt="${emotion}">
        <h6 class="display-4">You are ${emotion}, then me too.</h6>

        ${templatesVideos.checkOutVideos(urlEmo)}
        ${templatesComics.checkOutComics(emotion)}

        <div class="ask">
          <p>Do you feel better now?</p>
          <span>
            <i class="far fa-thumbs-up  thumbsUp"></i>
            <i class="far fa-thumbs-down  thumbsDown"></i>
          </span>
          <div class="d-none positive">

          </div>
          <div class="d-none negative">
            <form>
              <div class="form-group">
                <label for="favorites"> You are still not satisfied. Then, please tell me what would you like to do? </label>
                <input type="text" class="form-control" id="activity" placeholder="I want to visit foreign countries.">
                <small id="inputHelp" class="form-text text-muted">I won't tell anyone.</small>
                <button type="submit" class="btn btn-outline-success btn-sm">Submit</button>
              </div>
            </form>
          </div>
        </div>
      `

}

module.exports = renderEmo;
