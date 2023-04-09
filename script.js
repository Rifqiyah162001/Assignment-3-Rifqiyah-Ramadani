import {getCountries, getHistoryCountry} from './api.js';

const countries = await getCountries();
const dataCountries = countries.response;
const country = document.getElementById('country');

const activecase = document.getElementById('active-case');
const newcase = document.getElementById('new-case');
const recoveredcase = document.getElementById('recovered-case');
const totalcases = document.getElementById('total-case');
const totaldeaths =document.getElementById('total-death');
const totaltests = document.getElementById('total-tests');

dataCountries.forEach(element => {
    document.getElementById('countries').innerHTML += `<option value="${element}">${element}</option>`
});

document.getElementById('countries').addEventListener('change', async function(e){
    e.preventDefault()
    const countryselect = document.getElementById('countries').value
    country.innerHTML = `${countryselect}`
    const result = await getHistoryCountry(countryselect);

    const history_country = result.response[0];

    activecase.innerHTML = history_country.cases.active;
    newcase.innerHTML = history_country.cases.new;
    recoveredcase.innerHTML = history_country.cases.recovered;
    totalcases.innerHTML = history_country.cases.total;
    totaldeaths.innerHTML = history_country.deaths.total;
    totaltests.innerHTML = history_country.tests.total;
})

