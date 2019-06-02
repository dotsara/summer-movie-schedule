const initialOrder = document.getElementById('original-movies');
const reorderedMovies = document.getElementById('reordered-movies');

// found shuffle function from Googling
const shuffleArray = array => array
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const summerDates = [
    '03-June',
    '10-June',
    '17-June',
    '24-June',
    '01-July',
    '08-July',
    '15-July',
    '22-July',
    '29-July',
    '05-August',
    '12-August',
    '19-August',
    '26-August',
    '02-September'
]
const moviesList = {
    'Edge of Tomorrow': 'S',
    'Out of Sight': 'S',
    'Raiders of the Lost Ark': 'S',
    'Alien': 'S',
    'In the Line of Fire': 'S',
    'Mad Max: Fury Road': 'K',
    'Wonder Woman': 'K',
    'Die Hard': 'K',
    'Unforgiven': 'L',
    'Blade Runner': 'L',
    'Saving Private Ryan': 'L',
    'Bull Durham': 'L',
    'The Dark Knight': 'L',
    'Jaws': 'L',
    'Independence Day': 'M',
    'Do the Right Thing': 'M',
    'Gladiator': 'M'
}
const movieTitles = Object.keys(moviesList);

// put the original list of movies into the page, so I don't have to
// do it manually.
for (const title of movieTitles) {
    initialOrder.innerHTML = initialOrder.innerHTML + `<li>${title}</li>`;
}

// do the thing!
// or: do several things. refactoring imminent!
function mixUpMovies() {
    if (reorderedMovies.children.length !== 0) {
        reorderedMovies.innerHTML = '';
    }
    shuffleArray(movieTitles).forEach(function(title, i) {
        reorderedMovies.innerHTML =
            reorderedMovies.innerHTML + `<li>${summerDates[i]}: ${title}</li>`;
    })
    document.getElementById('mixer').textContent = 'Mix \'em up again!';
};
