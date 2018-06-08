function video(url) {
  return `
    <div class="col">
      <iframe width="90%" src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  `
}

function checkOutVideos(urlEmo) {
    const videoTags = urlEmo.map(url => video(url)).join('')

  return `
    <p class="text-center big-text">Check out these videos</p>
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
