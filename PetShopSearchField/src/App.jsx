import {useState} from "react";
//import viteLogo from '/vite.svg';
import './App.css';
import {SearchBar} from "./components/SearchBar.jsx";
import {SearchResultsList} from "./components/SearchResultsList.jsx";

function App() {
//variable that will contain results we've gotten back from api
    const [results, setResults] = useState([]);
    return (
        <div className="App">
            <div className="searchTitle">Welcome to the Net Shop Pet Shop</div>
            <div className="search-bar-container">
                <SearchBar setResults={setResults}/>
                <SearchResultsList results={results}/>
            </div>
        </div>
    );

}

export default App
