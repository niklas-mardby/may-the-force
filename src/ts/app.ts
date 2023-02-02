import SWPeople from './SWPeople';

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
