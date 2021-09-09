import React from 'react';
import Preloader from './Preloader';
import Movies from './Movies';
import Search from './Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            loading: true,
        };
    }
    componentDidMount() {
        console.log(process.env);
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e65f4df7&s=matrix`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=e65f4df7&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}
export { Main };
