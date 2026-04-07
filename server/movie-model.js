/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
   const movies = {

      tt0120762: {
        imdbID: "tt0120762",
        Title: "Mulan",
        Released: "1998-06-19",
        Runtime: 87,
        Genres: ["Animation", "Adventure", "Comedy"],
        Directors: ["Tony Bancroft", "Barry Cook"],
        Writers: ["Robert D. San Souci", "Rita Hsiao", "Chris Sanders"],
        Actors: ["Ming-Na Wen", "Eddie Murphy", "BD Wong"],
        Plot: "A young Chinese maiden disguises herself as a warrior to save her father.",
        Poster: "https://m.media-amazon.com/images/M/MV5BYzU0ZTQxZDktOGY0Yy00NjdiLTllNDItMTMzMjI1YjMyYjRhXkEyXkFqcGc@._V1_SX300.jpg",
        Metascore: 72,
        imdbRating: 7.7
      },
    
      tt0414982: {
        imdbID: "tt0414982",
        Title: "Final Destination 3",
        Released: "2006-02-10",
        Runtime: 93,
        Genres: ["Horror", "Thriller"],
        Directors: ["James Wong"],
        Writers: ["Glen Morgan", "James Wong", "Jeffrey Reddick"],
        Actors: ["Mary Elizabeth Winstead", "Ryan Merriman", "Kris Lemche"],
        Plot: "A group of teens escape a roller coaster accident but death returns.",
        Poster: "https://m.media-amazon.com/images/M/MV5BMzI3NzE0MmEtYmFjZC00NTJhLWI4OWUtNGRmNDEwNGU3NzM0XkEyXkFqcGc@._V1_SX300.jpg",
        Metascore: 43,
        imdbRating: 5.9
      },
    
      tt0120082: {
        imdbID: "tt0120082",
        Title: "Scream 2",
        Released: "1997-12-12",
        Runtime: 120,
        Genres: ["Horror", "Mystery"],
        Directors: ["Wes Craven"],
        Writers: ["Kevin Williamson"],
        Actors: ["Neve Campbell", "Courteney Cox", "David Arquette"],
        Plot: "The Ghostface killer returns at a college campus.",
        Poster: "https://m.media-amazon.com/images/M/MV5BODE5YWJkMDMtN2ZiNC00MjI5LTkxYTgtOTkyZjUwMjU0YThiXkEyXkFqcGc@._V1_SX300.jpg",
        Metascore: 62,
        imdbRating: 6.3
      }
    
    }
    
    module.exports = movies