const url = "https://swapi.dev/api/people";

async function load() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.results.length);
    for (const person of data.results) {
        console.log(`${person.name} has ${person.eye_color} eyes.`);
    }
    data.results.forEach(person => {
        console.log(`${person.name} is ${person.height} cm tall.`);
    });
}

load();
