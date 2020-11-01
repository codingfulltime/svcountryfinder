const mainButton = document.querySelector('.main-btn');
const countriesList = document.querySelector('.list');
const filterCountry = document.querySelector('.byCountry');
const filterLanguage = document.querySelector('.byLanguage');
const URL = `https://restcountries.eu/rest/v2/all`;

class CountriesAPI {
    constructor(url){
        this.url = url
    }

    getCountries = () => {
        fetch(this.url)
        .then(data => data.json())
        .then(data => {
            // data.forEach(country => {
            //     countriesList.innerHTML += 
            //     `
            //     <li>
            //     <span class="countryResult">${country.name}</span>
            //     <span class="languageResult">${country.languages.map(lang => lang.name)}</span>
            //     <img src="${country.flag}" class="flags"/>
            //     </li>
            //     `;
            // })

            data.forEach(country => {
                countriesList.innerHTML += 
                `
                <tr>
                    <td class="countryResult">${country.name}</td>
                    <td class="languageResult">${country.languages.map(lang => lang.name)}</td>
                    <td><img src="${country.flag}" class="flags"/></td>
                </tr>
                `;
            })
        })
    }
}

mainButton.addEventListener('click', (e) => {
    const countriesInfo = new CountriesAPI(`https://restcountries.eu/rest/v2/all`);
    countriesInfo.getCountries();

    e.preventDefault();
})

filterCountry.addEventListener('keyup', (e) => {
    const userInput = e.target.value.toLocaleLowerCase();
    console.log(e.target.value.toLowerCase())
    const countryItem = document.querySelectorAll('.countryResult');
    console.log(countryItem)
    countryItem.forEach(countries => {
        if(countries.textContent.toLocaleLowerCase().indexOf(userInput) !== -1){
            countries.parentElement.style.display = 'grid';
        } else {
            countries.parentElement.style.display = 'none';
        }
    })

    e.preventDefault();
})

filterLanguage.addEventListener('keyup', (e) => {
    const userInput = e.target.value.toLocaleLowerCase();
    console.log(e.target.value.toLowerCase())
    const languageItem = document.querySelectorAll('.languageResult');
    console.log(languageItem)
    languageItem.forEach(languages => {
        if(languages.textContent.toLocaleLowerCase().indexOf(userInput) !== -1){
            languages.parentElement.style.display = 'grid';
        } else {
            languages.parentElement.style.display = 'none';
        }
    })

    e.preventDefault();
})