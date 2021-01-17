
let darkLightButton = document.getElementById('darkModeButton')
let h5 = document.querySelectorAll('h5')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
let p5 = document.getElementById('p5')
let p6 = document.getElementById('p6')
let firsth5 = document.getElementById('firstH5')
let secondh5 = document.getElementById('secondH5')
let email = document.getElementById('email')
let downloadButton = document.getElementById('downloadButton')
let facebook= document.getElementById('facebook')
let instagram= document.getElementById('instagram')
let twitter= document.getElementById('twitter')
let youtube= document.getElementById('youtube')
let smallImage3 = document.getElementById('small_img3')

function darkLightToggle() {
  if (darkLightButton.innerHTML === '<i class="fas fa-moon"></i>'){
    darkLightButton.innerHTML ='<i class="fas fa-sun"></i>'
    darkLightButton.style.color= "white"
  }
  else {
    darkLightButton.innerHTML ='<i class="fas fa-moon"></i>'
    darkLightButton.style.color= "black"
  }

  if (smallImage3.getAttribute('src') === './assets/img/lightmode/illustration6.png'){
    smallImage3.setAttribute('src',"assets/img/darkmode/darkmode-img6.png")
  }
  else {
    smallImage3.setAttribute('src',"./assets/img/lightmode/illustration6.png")
  }

  document.body.classList.toggle('darkMode')
  p1.classList.toggle('darkMode')
  p2.classList.toggle('darkMode')
  p3.classList.toggle('darkMode')
  p4.classList.toggle('darkMode')
  p5.classList.toggle('darkMode')
  p6.classList.toggle('darkMode')
  firsth5.classList.toggle('darkMode')
  secondh5.classList.toggle('darkMode')
  email.classList.toggle('darkModeGray')
  downloadButton.classList.toggle('darkModeDownload')
  facebook.classList.toggle('darkModeGray')
  instagram.classList.toggle('darkModeGray')
  twitter.classList.toggle('darkModeGray')
  youtube.classList.toggle('darkModeGray')

}
