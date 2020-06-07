import React, { Fragment } from "react";
import CardList from "../Component/CardList";
import SearchBox from "../Component/SearchBox";
import Scroll from "../Component/Scroll";
import "./App.css";
//import { Robots } from "./Robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { Robots, searchField } = this.state;
    const filterRobots = Robots.filter((Robot) => {
      return Robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    console.log(filterRobots);

    if (this.state.Robots.length === 0) {
      return <h1> Loading </h1>;
    } else {
      return (
        <Fragment>
          <div className="tc">
            <h1 className="f1"> RoboFriends </h1>
            <SearchBox SearchChange={this.onSearchChange} />
            <Scroll>
              <CardList Robots={filterRobots} />
            </Scroll>
          </div>
        </Fragment>
      );
    }
  }
}

export default App;
