interface SWPeople {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}
const url = "https://swapi.dev/api/people";

// interface Person2 { [key: string]: string | string[]; }

async function load() {
    const response = await fetch(url);
    const data = await response.json();

    let person1: SWPeople;
    for (person1 of data.results) {
        console.log(`${person1.name} has ${person1.eye_color} eyes.`);
    }
    data.results.forEach((person: SWPeople) => {
        console.log(`${person.name} is ${person.height} cm tall.`);
    });
}

load();
