let loaded = false
let playingBgm = false

const TARGET_TIME = new Date("Dec 27, 2025 00:00:00").getTime()

function doTimer() {
  var now = new Date().getTime()

  var dist = TARGET_TIME - now

  var d = Math.floor(dist / (1000 * 60 * 60 * 24))
  var h = Math.floor(dist % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  var m = Math.floor(dist % (1000 * 60 * 60) / (1000 * 60))
  var s = Math.floor(dist % (1000 * 60) / 1000)

  document.getElementById("timer").textContent = `${d} days, ${h}h ${m}m ${s}s`}

document.onreadystatechange = function(e) {
  if (!loaded) {
    console.log("Loaded!")
    document.getElementById("bgm").play()
    .then((result) => {
      playingBgm = true
      document.getElementById("plzclick").remove()
    })
    .catch((reason) => {
      console.log("unable to play bgm because user needs to poke the page first\nDFHGHJDFJHGDFSHHKJ 3:<")
    })
    loaded = true

    doTimer()
    var x = setInterval(doTimer, 1000)
  }
}

document.onclick = function(e) {
  console.log("poke!")
  if (!playingBgm) {
    playingBgm = true
    document.getElementById("bgm").play()
    document.getElementById("plzclick").remove()
  }
}