//Initialize
for (let country of countries) {
    let select = formMain.selectCountries;
    select.add(new Option(country.name));
}
countries[0].addToSelect(formMain.selectCities);
writeText();

//Change of country select
function countryChanged() {
    let index = formMain.selectCountries.selectedIndex;
    formMain.selectCities.options.length = 0;
    countries[index].addToSelect(formMain.selectCities);
    writeText();
}

//Write text Country&City
function writeText() {
    let country = formMain.selectCountries.value;
    let city = formMain.selectCities.value;
    document.getElementById("text").innerHTML = `to <span>${country}</span>, city <span>${city}</span>`;
}

//Show alert
function showAlert()
{
    alert("Flights are over");
}