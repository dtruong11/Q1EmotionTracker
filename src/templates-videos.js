function video(url) {
  return `
    <div class="col">
      <iframe width="80%" src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  `
}

function checkOutVideos(urlEmo) {
    const videoTags = urlEmo.map(url => video(url)).join('')

  //const videos = urls.map(url => video(url)).join('')

  return `
    <p>Check out these videos</p>
    <div class="container mb-2">
      <div class="row">
          ${videoTags}
      </div>
    </div>
  `
}

module.exports = {
  video,
  checkOutVideos
}
