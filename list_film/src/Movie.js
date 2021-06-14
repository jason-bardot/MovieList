import React, { Component } from "react";


class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: null,
            head: ["Title", "genre", "years"],
            genres: {
                28: "Action",
                12: "Adventure",
                16: "Animation",
                35: "Comedy",
                80: "Crime",
                99: "Documentary",
                18: "Drama",
                10751: "Family",
                14: "Fantasy",
                36: "History",
                27: "Horror",
                10402: "Music",
                9648: "Mystery",
                10749: "Romance",
                878: "Science Fiction",
                10770: "TV Movie",
                53: "Thriller",
                10752: "War",
                37: "Western"
            }
        };
    }

    async componentDidMount() {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=20536127679dea5ab5c1141410818e81')
        const data = await response.json();
        this.setState({ items: data.results });
        console.log(this.state.items)
    }

    rendersItems(items) {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {this.state.head.map((item, index) => {
                                return <th>{item}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{this.state.genres[item.genre_ids[0]]}</td>
                                    <td>{item.release_date.slice(0, 4)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    sort_genre() {
        const list = this.state.items;
        this.setState({
            items: list.sort((a, b) => a.genre_ids[0] - b.genre_ids[0])
        });
    }

    sort_years() {
        const list = this.state.items;
        this.setState({
            items: list.sort((a, b) => a.release_date.slice(0, 4) - b.release_date.slice(0, 4))
        });
    }

    render() {
        if (this.state.items !== null) {
            return (
                <div>

                    <div className="ButtonBar">
                        <button onClick={(e) => this.sort_genre(e)}>sort genre</button>
                        <button onClick={(e) => this.sort_years(e)}>sort years</button>
                    </div>

                    <div>
                        {this.rendersItems(this.state.items)}
                    </div>
                </div>
            );
        }
        return (
            <div>loading</div>
        );
    }


}
export default Movie;