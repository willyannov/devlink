function toggleMode() {
  const html = document.documentElement

  // Uma forma de adicionar toogle
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  html.classList.toggle("light")

  const img = document.querySelector(".profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode, vai adicionar avatar-light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //linha 16
    img.setAttribute("src", "./assets/avatar.png")
  }
}
