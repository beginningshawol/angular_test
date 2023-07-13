import { Movie } from "./data.interface";

export class DataService{
    private movies: Movie[] = [];

    getData() {
        return this.movies;
    }

    getMovieName(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].name;
    }

    getMovieBudget(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].budget;
    }

    getMovieCompany(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].company;
    }

    getMovieCountry(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].country;
    }

    getMovieDirector(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].director;
    }

    getMovieGenre(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].genre;
    }

    getMovieGross(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].gross;
    }

    getMovieRating(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].rating;
    }

    getMovieReleased(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].released;
    }

    getMovieRuntime(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].runtime;
    }

    getMovieScore(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].score;
    }

    getMovieStar(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].star;
    }

    getMovieVotes(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].votes;
    }

    getMovieWriter(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].writer;
    }

    getMovieYear(movie: Movie) {
        const index = this.movies.indexOf(movie);
        return this.movies[index].year;
    }

}