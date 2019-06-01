const reorderedMovies = document.getElementById('reordered-movies');
const movies = [
    "Jaws",
    "Star Trek (2009)",
    "Independence Day",
    "Star Wars",
    "Jurassic Park"
];

// found shuffle function from Googling
const shuffleArray = array => array
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const shuffledMovies = shuffleArray(movies);

function mixUpMovies() {
    document.getElementById('mixer').disabled = true;
    for (const movie of shuffledMovies) {
        reorderedMovies.innerHTML = reorderedMovies.innerHTML + `<li>${movie}</li>`;
    }
};
