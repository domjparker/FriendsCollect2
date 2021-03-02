import React, {  useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import { robots } from "./robots";
import "./App.css";

function App() {
  const [ robots, setRobots ] = useState([]);
  const [ searchField, setSearchField ] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users))
  },[])

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const FILTERED_ROBOTS = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <div className="tc">
        <h1 className='f1'>FriendsCollect</h1>
        <SearchBox searchChange={onSearchChange}/>
        <CardList robots={FILTERED_ROBOTS} />
      </div>
    </>
  );
}

export default App;
