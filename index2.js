/*
1. Chart
2. Form
3. fetch image 'öppettider'
4. Local storage - form
 */


/*1.Chart*/

fetch('./besökare.json')
    .then((response) => response.json())
    .then((result) => {
      const ctx = document.getElementById('mychart')
      const data = [],
      labels = [],
      dataHelg = [],
      labelsHelg = []


    for(let i = 0; i < result.vardag.length; i++) {
      const customersHour = result.vardag


      data.push(customersHour[i].customers)
      labels.push(customersHour[i].hour)
    }

    for(let i = 0; i < result.helg.length; i++) {
      const customersHour = result.helg


      dataHelg.push(customersHour[i].customers)
      labelsHelg.push(customersHour[i].hour)
    }

    new Chart("myChart", {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          data: data,
          borderColor: "black",
          label: "Vardag",
          fill: false
        },{
          data: dataHelg,
          borderColor: "pink",
          label: "Helg",
          fill: false
        }]
      },
      options: {
        legend: {
          fontColor: "black"
        },
        title: {
          display: true,
          text: "Genomsnittligt antal kunder per timme",
          fontColor: "black"
        },
        scales: {
          xAxes: [{
              gridLines: {
                  color: "grey",
              },
              ticks: {
                fontColor: "black",
              },
          }],
          yAxes: [{
              gridLines: {
                  color: "grey",
              },
              ticks: {
                fontColor: "black"
              }
          }],
      }
      }
    })
  })

/* 2.Form */

//add cities to list from api
//object of city+id fo PUT function
window.addEventListener('load', loadCities);
const myCities = document.querySelector('.stad')
const myCitiesObject = {}
const citiesKeysArray = []
const citiesValuesArray = []

function loadCities() {
fetch('https://avancera.app/cities/')
.then((response) =>
response.json())
.then((data) => {
    for(let i = 0; i < data.length; i++) {
          let optionElement = document.createElement('option');
          optionElement.innerHTML = data[i].name;
          myCities.append(optionElement);

          citiesKeysArray.push(data[i].name);
          citiesValuesArray.push(data[i].id);
          myCitiesObject[citiesKeysArray[i]] = citiesValuesArray[i]

    }
  })
}




//function if "other"

const ifOther = document.querySelector('#ifother')
const ifOtherLabel = document.querySelector('#ifotherlabel')
const hometown = document.querySelector('#stad')

hometown.onchange = function () {
  if(hometown.value == 'Other' ){
    console.log('Hej')
    ifOther.style.display = 'inline-block'
    ifOtherLabel.style.display = 'inline-block'
  } else if (hometown.value !== 'Other') {
    ifOther.style.display = 'none'
    ifOtherLabel.style.display = 'none'
}}

//submit

const submitBtn = document.querySelector('#submit')
const myForm = document.querySelector('#myform')
const greetingThanks = document.querySelector('#greeting')
const greetingPlease = document.querySelector('#please')
const nameItm = document.querySelector('#firstname')
const lastNameItm = document.querySelector('#lastname')
const mailItm = document.querySelector('#mail')
const cityItm = document.querySelector('#stad')
const ifOtherItm = document.querySelector('#ifother')
const checkBox = document.querySelector('#change')
const changeCity = document.querySelector('#changecity')
const changeCityLabel = document.querySelector('#changecitylabel')
const submitChange = document.querySelector('#changesubmit')
const updatedMes = document.querySelector('#updated')


submitBtn.disabled = true
greetingPlease.style.display = 'inline-block'
checkBox.disabled = true

document.querySelectorAll('input').forEach(item => {item.addEventListener('input', function(){
   if(nameItm.value == 0 || lastNameItm.value == 0 || mailItm.value == 0) {
    submitBtn.disabled = true
    greetingPlease.style.display = 'inline-block'
   } else if (nameItm.value !== 0 && lastNameItm.value !== 0 && mailItm.value !== 0) {
    submitBtn.disabled = false
    greetingPlease.style.display = 'none'
   }
})})

cityItm.addEventListener('input', function(){
  if(cityItm.value !== '' && cityItm.value !== 'Other') {
    checkBox.disabled = false
  } else if (cityItm.value == 0 || cityItm.value == 'Other') {
    checkBox.disabled = true
    changeCity.style.display = 'none'
    changeCityLabel.style.display = 'none'
    submitChange.style.display = 'none'
  }
})

checkBox.addEventListener('input', function(){
  if(checkBox.checked == true) {
    changeCity.style.display = 'inline-block'
    changeCityLabel.style.display = 'inline-block'
    submitChange.style.display = 'inline-block'
  } else if (checkBox.checked == false) {
    changeCity.style.display = 'none'
    changeCityLabel.style.display = 'none'
    submitChange.style.display = 'none'
  }
})

myForm.addEventListener('submit', onSubmit);

//on submit
function onSubmit(event) {
  if(cityItm.value == 'Other') {
    fetch('https://avancera.app/cities/', {
  body: JSON.stringify({ name: ifOtherItm.value, population: 0}),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
})
  .then(response => response.json())
  .then(result => {
    greetingThanks.textContent = 'Hej ' + document.querySelector('#firstname').value + '! Tack för att du kontaktat oss. Vi hör av oss till dig så snart vi kan, inom två arbetsdagar!'
  })
  } else {
    greetingThanks.textContent = 'Hej ' + document.querySelector('#firstname').value + '! Tack för att du kontaktat oss. Vi hör av oss till dig så snart vi kan, inom två arbetsdagar!';
}
event.preventDefault();
}

//location.reload();

// function change btn with PUT

cityItm.addEventListener('input', storeCityInput);

function storeCityInput() {
submitChange.addEventListener('click', onClick);
function onClick() {
  fetch('https://avancera.app/cities/'+myCitiesObject[cityItm.value], {
      body: JSON.stringify({ id: myCitiesObject[cityItm.value], name: changeCity.value, population: 0}),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    })
      .then(response => {
        console.log(response);
        updatedMes.style.display = 'inline-block'
    })
  }
}

/*fetch image öppettider*/

window.addEventListener('load', backgroundLoad)
let oppettiderBackground = document.querySelector('.imgoppettider')

function backgroundLoad() {
  fetch('https://api.unsplash.com/search/photos?query=cafe-lamps&client_id=vXWC49BFMkDR-fPhC7h8-gvhmWMO96nXkuADxKfLWZg')
  .then((response) =>
  response.json())
  .then((data) => {
    console.log(data)
      oppettiderBackground.style.background = 'url('+data["results"][1]["urls"]["regular"]+')';
      oppettiderBackground.style.backgroundSize = 'cover';
      oppettiderBackground.style.backgroundRepeat = 'no-repeat'
  })}

  /*4. Local storage - form*/


  window.addEventListener('input', function(){
    let firstName = nameItm.value
    let lastName = lastNameItm.value
    let eMail = mailItm.value

    localStorage.setItem('firstname', firstName)
    localStorage.setItem('lastname', lastName)
    localStorage.setItem('email', eMail)

 })
 window.addEventListener('load', function(){
  const name = localStorage.getItem('firstname');
  const surname = localStorage.getItem('lastname');
  const mymail = this.localStorage.getItem('email')
  document.querySelector('#firstname').value = name;
  document.querySelector('#lastname').value = surname;
  document.querySelector('#mail').value = mymail;

})
