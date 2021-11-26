import './css/styles.css';
import { debounce } from 'lodash/debounce';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(() => {
    const name = searchBox.value;
    fetchCountries(name).then(showCountry).catch(showError);
}, DEBOUNCE_DELAY));

function showError (error) {
    console.log(error);
    countryInfo.innerHTML = 'Ойойой, что-то пошло не так, попробуй еще раз!';
}

function showCountry ({
    name, 
    capital, 
    population, 
    flags, 
    languages,
}) 

function fetchCountries (name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`)
    .then(response => {
        if(!response.ok) {
            return Promise.reject();
        }
        return response.json();
    });
}