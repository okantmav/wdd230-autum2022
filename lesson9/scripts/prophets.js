const cards = document.querySelector('.cards');

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then((response) => response.json())
  .then((jsonData) => {
    //console.table(data);
    const prophets = jsonData["prophets"];
    prophets.forEach(displayProphets);
  });


function displayProphets(prophet){

  // Create elements to add to the document
  const card = document.createElement('section');
  const fullName = document.createElement('h2');
  const portrait = document.createElement('img');
  const birthDate = document.createElement('p');
  const placeOfBirth = document.createElement('p');

    // Change the textContent property of the element to contain the prophet's data
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;


    // Build the image attributes by using the setAttribute method for the src, alt,
    // and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the elements
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}
