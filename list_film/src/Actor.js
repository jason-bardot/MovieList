import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Table from 'react-bootstrap/Table'


class Actor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: null,
            list_name: null,
            actor: null,
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
        const response = await fetch('https://api.themoviedb.org/3/person/popular?api_key=20536127679dea5ab5c1141410818e81')
        const data = await response.json();
        this.setState({
            items: data.results,
            list_name: data.results.map(i => i.name)
        });


    }

    handleClick(name_actor) {
        let item = this.state.items.filter((i) => i.name === name_actor);
        this.setState({ actor: item[0] })
    }

    rendersItems(items) {
        return (
            <div>
                <div className="center">
                <DropdownButton variant="secondary" id="dropdown-basic-button" title={this.state.actor === null ? "List of Actor" : this.state.actor.name}>
                    {this.state.list_name.map((item, index) => {
                        return (
                            <Dropdown.Item value={item} onClick={() => this.handleClick(item)}>{item}</Dropdown.Item>
                        );
                    })}
                </DropdownButton>
                </div>
                {this.state.actor !== null ?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {this.state.head.map((item, index) => {
                                    return <th>{item}</th>;
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.actor.known_for.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{this.state.genres[item.genre_ids[0]]}</td>
                                        <td>{item.release_date==!null?item.release_date.slice(0, 4):<div>unknow</div>}</td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </Table> :
                    <div></div>
                }
            </div>
        )
    }



    render() {
        if (this.state.items !== null) {
            return (
                <div>
                    {this.rendersItems(this.state.items)}
                </div>
            );
        }
        return (
            <div>loading</div>
        );
    }


}
export default Actor;