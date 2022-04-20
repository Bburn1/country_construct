function getObj(){
    return this
}

function Country(title,capital,population,area){
    this.title = title
    this.capital = capital
    this.population = population
    this.area = area
    this.getCountry = getObj;
}

const ua = new Country(`Ukraine`,'Kyiv','Mnogo','S krimom norm')
const pl = new Country(`Poland`,'Warsaw','35351k','521ae')

function printCountry(country){
    for(let key in country){
        if(typeof country[key] !== 'function'){
            console.log(`${key}: ${country.getCountry()[key]}`);
        }
    }
}
printCountry(ua)
printCountry(pl)






