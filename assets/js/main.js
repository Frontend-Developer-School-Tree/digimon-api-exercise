/* Digimon Data Structure: 
    name: 
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
        // console.log(data[1]);

        data.map( digimon => {
            const cardContent = document.importNode(injectionTemplate.content,true);

            cardContent.querySelector('.digimonName').textContent = digimon.name;
            cardContent.querySelector('.digimonType').innerHTML = `<strong>Type:</strong> ${digimon.type}`
            cardContent.querySelector('.digimonAttributes').innerHTML = `<strong>Attribute:</strong> ${digimon.attribute}`
            cardContent.querySelector('.digimonStage').innerHTML = `<strong>Stage:</strong> ${digimon.stage}`
            // cardContent.querySelector('.digimonId').textContent = digimon._id;

            const degList = cardContent.querySelector('.digimonDegenerates');
            const evList = cardContent.querySelector('.digimonEvolves');

            // Prior forms
            if (digimon.degeneratesTo == null) {
                const newLi = document.createElement('p');
                newLi.textContent = "No prior form"
                degList.append(newLi);
            } else {
                digimon.degeneratesTo.map( pre => {
                    const newLi = document.createElement('li');
                    newLi.textContent = pre;
                    degList.append(newLi);
                })
            }

            // Evolutions
            if (digimon.digivolvesTo == null) {
                const newLi = document.createElement('p');
                newLi.textContent = "No prior form"
                evList.append(newLi);
            } else {
                digimon.digivolvesTo.map( pre => {
                    const newLi = document.createElement('li');
                    newLi.textContent = pre;
                    evList.append(newLi);
                })
            }

        
            injectionDiv.append(cardContent);
        })
    }
}

Card.getData();

