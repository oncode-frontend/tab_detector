const $ = document
const h1Elem = $.querySelector('h1')


document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
        h1Elem.innerHTML = "you leave me :("
        document.title = "Active"
    } else {
        h1Elem.innerHTML = "If you leave this page and change tap, I will notice :)"
        document.title = "Inactive"
    }
  });