import React,{useState,useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';



function App(){
    const [searchField,setSearchField]=useState("");
    const [robots,setRobots]=useState([]);
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>setRobots(users));
   },[]);

    const onSearchChange=(event)=>{
        setSearchField(event.target.value)
    }
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(robots.length===0){
            return <h1 className='f1 tc'>Loading</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }


}

export default App;