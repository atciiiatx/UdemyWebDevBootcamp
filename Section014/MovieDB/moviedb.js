
movies = [
    {
        title: 'Wreck It Ralph',
        hasWatched: true,
        rating: 4.5
    },
    {
        title: 'Raiders of the Lost Ark',
        hasWatched: true,
        rating: 4.75
    },
    {
        title: 'The Godfather',
        hasWatched: false,
        rating: 3
    },
    {
        title: 'On Deadly Ground',
        hasWatched: true,
        rating: 1
    }
];

movies.forEach(
    function (m) {
        watchString = "watched";
        if (!m.hasWatched) {
            watchString = "not seen";
        }
        console.log("You have " + watchString + ' "' +
            m.title + '" - ' + m.rating + " stars");
    }
)