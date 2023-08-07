let $ = document

const selectBtn = $.querySelector('.select-btn')
const arrow = $.querySelector('.uil-angle-down')
const searchInput = $.querySelector('.search input')
const content = $.querySelector('.content')
const countriesBox = $.querySelector('.options')

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"
];

let isContentBox = false

const setCountries = () => {

    countries.forEach( countryName => {

        countriesBox.insertAdjacentHTML('beforeend', `
        <li onclick="setCountryName(this)">${countryName}</li>
        `)
        
    })

}

const setCountryName = (countryElem) => {
    let selectedElem = $.querySelector('.selected')
    
    if(selectedElem) {
        selectedElem.classList.remove('selected')
    }
    countryElem.classList.add('selected')

    selectBtn.children[0].textContent = countryElem.innerHTML
    showHideContentBox()
    
}

const showHideContentBox = () => {

    if(!isContentBox) {
        content.style.display = 'block'
        arrow.style.transform = 'rotate(180deg)'
        isContentBox = true
    }else{
        content.style.display = 'none'
        arrow.removeAttribute('style')
        isContentBox = false
    }

}
const searchCountry = () => {

    let word = searchInput.value.toLowerCase()

    let filtered = countries.filter(country => country.toLowerCase().startsWith(word))
    countriesBox.innerHTML = ''
    
    if (filtered == false){
        countriesBox.insertAdjacentHTML('beforeend', `<p> country not found ! </p>`)
        console.log('clijkds');
    }else{

        filtered.forEach( countryName => {
    
            countriesBox.insertAdjacentHTML('beforeend', `
                <li onclick="setCountryName(this)">${countryName}</li>
            `)
            
        })
    }
    
}  
window.addEventListener('load', setCountries)
selectBtn.addEventListener('click', showHideContentBox)
searchInput.addEventListener('keyup' , searchCountry)