/*
1. toggle Button
2. img section
3. Slideshow
4. Hero image
*/


//1. Toggle button

const togButton = document.getElementsByClassName('toggle-button')[0]
const togLinks = document.getElementsByClassName('nav-links')[0]

togButton.addEventListener('click', () => {
  togLinks.classList.toggle('active')
})

//2. img section

window.addEventListener('load', imagesLoad);
const imageDiv = document.querySelector('.img-section')
const showLess = document.querySelector('.lesspictures')
const showMore = document.querySelector('.morepictures')


function imagesLoad() {
fetch('https://api.unsplash.com/search/photos?query=cookies&client_id=vXWC49BFMkDR-fPhC7h8-gvhmWMO96nXkuADxKfLWZg')
.then((response) =>
response.json())
.then((data) => {
  for(let i = 0; i < 6; i++) {
        let imgElement = document.createElement('img');
        imgElement.src = data.results[i].urls.regular;
        showLess.append(imgElement);
  }
  for(let a = 6; a < 11; a++) {
    let imgElementTwo = document.createElement('img');
    imgElementTwo.src = data.results[a].urls.regular;
    showMore.append(imgElementTwo);
}
})
}


//function show more / show less
const imgButton = document.querySelector('.mybutton')

imgButton.addEventListener ('click', () => {
  if (showMore.style.display === 'none') {
    showMore.style.display = 'block'
    imgButton.innerHTML = 'Visa Mindre'
  } else {
    showMore.style.display = 'none'
    imgButton.innerHTML = 'Visa Mer'
  }
})

/*3. slideshow*/

window.addEventListener('load', slideshowLoad);
const divOneSlideS = document.querySelector('#slideshowdivone')
const divTwoSlideS = document.querySelector('#slideshowdivtwo')
const divThreeSlideS = document.querySelector('#slidesowdivthree')
const divFourSlideS = document.querySelector('#slideshowdivfour')


function slideshowLoad() {
fetch('https://api.unsplash.com/search/photos?query=cafe&client_id=vXWC49BFMkDR-fPhC7h8-gvhmWMO96nXkuADxKfLWZg')
.then((response) =>
response.json())
.then((data) => {
      let imgElementOne = document.createElement('img');
      imgElementOne.src = data.results[4].urls.regular;
      divOneSlideS.append(imgElementOne);

      let imgElementTwo = document.createElement('img');
      imgElementTwo.src = data.results[7].urls.regular;
      divTwoSlideS.append(imgElementTwo);

      let imgElementThree = document.createElement('img');
      imgElementThree.src = data.results[9].urls.regular;
      divThreeSlideS.append(imgElementThree);

      let imgElementFour = document.createElement('img');
      imgElementFour.src = data.results[1].urls.regular;
      divFourSlideS.append(imgElementFour);
})
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slide = document.getElementsByClassName('slidefade');
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }
  slide[slideIndex-1].style.display = 'block';
}

/*4.Hero image */

window.addEventListener('load', heroImageLoad)
let heroImage = document.querySelector('.hero-image')

function heroImageLoad() {
  fetch('https://api.unsplash.com/photos/QsR7gUGPvpY?client_id=vXWC49BFMkDR-fPhC7h8-gvhmWMO96nXkuADxKfLWZg')
  .then((response) =>
  response.json())
  .then((data) => {
    console.log(data)
    heroImage.style.background = 'linear-gradient(rgba(20, 19, 19, 0.336), rgba(7, 7, 7, 0.336)), url('+data.urls.regular+')';
    heroImage.style.backgroundSize = 'cover';
    heroImage.style.backgroundRepeat = 'no-repeat'
  })}

  //background-image: linear-gradient(rgba(20, 19, 19, 0.336), rgba(7, 7, 7, 0.336)),
