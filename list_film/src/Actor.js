import React, { Component } from "react";


class Actor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: null,
            list_name: null,
            actor: null,
            head: ["Actor", "film"],
        };
    }

    async componentDidMount() {
        const response = await fetch('https://api.themoviedb.org/3/person/popular?api_key=20536127679dea5ab5c1141410818e81')
        const data = await response.json();
        this.setState({
            items: data.results,
            list_name: data.results.map(i => i.name)
        });

        console.log(this.state.list_name)
    }

    handleClick(name_actor) {
        console.log(name_actor)
        let item = this.state.items.filter((i) => i.name === name_actor);
        console.log(item[0])
        this.setState({ actor: item[0] })
    }

    rendersItems(items) {
        console.log(this.state)
        return (
            <div>
                <div className="TabHead">Click on an Actor</div>
                <table>
                    <thead>
                        <tr>
                            {this.state.head.map((item, index) => {
                                return <th>{item}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list_name.map((item, index) => {
                            return (
                                <tr >
                                    <td><div className="Click" value={item} onClick={() => this.handleClick(item)}>{item}</div></td>
                                    <td>{this.state.actor !== null && item === this.state.actor.name ?
                                        (this.state.actor.known_for.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.title}</td>
                                                </tr>
                                            );
                                        })) :
                                        (<div></div>)

                                    }</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        )
    }



    render() {
        if (this.state.items !== null) {
            return (
                <div>
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
export default Actor;