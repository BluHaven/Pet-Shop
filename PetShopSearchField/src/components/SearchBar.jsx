import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    //Calling the api below
    const fetchData = (value) => {
        fetch("http://localhost:3001/pets")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((pets) => {
                    return (
                        value &&
                        pets &&
                        pets.name &&
                        pets.name.toLowerCase().includes(value.toLowerCase())
                    );
                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                placeholder="Type to search for your new fur family member"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};