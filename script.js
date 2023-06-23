function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver no light mode, adicionar a imagem light
    img.setAttribute("src", "https://github.com/santos-vital.png")
  } else {
    // se estiver no dark mode, adicionar a imagem dark
    img.setAttribute("src", "https://github.com/santos-vital.png")
  }
}
