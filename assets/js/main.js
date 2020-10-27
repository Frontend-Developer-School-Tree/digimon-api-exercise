/* Digimon Data Structure: 
    type: "Vaccine"
    attribute: "Neutral" /
    degeneratesTo: null / Array
    digivolvesTo: null / Array (["digi1", etc.])
    skill: id?
    stage: "Baby"
    _v:
    __id : 
*/

const injectionTemplate = document.getElementById('templateDigimon');
const injectionDiv = document.getElementById('injectionDiv');

class Card {
    static async getData() {
        const response = await fetch('https://digimon-cyber-sleuth-api.herokuapp.com/api/digimon')
        const data = await response.json()
        console.log(data);

    }
}

Card.getData();

