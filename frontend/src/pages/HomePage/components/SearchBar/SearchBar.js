import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ onFormSubmit, searchTerm }) => {
    const [query, setQuery] = useState(searchTerm);

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(query);
        // console.log(`Searching for: ${query}`);
        // Perform search logic with the query
    };

    return (
        <Form onSubmit={handleSubmit} className="container">
            <div className="d-flex align-items-center mb-5 mt-3 w-75 mx-auto">
                <FormControl
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <Button type="submit" variant="primary" className="ms-4">
                    Search
                </Button>
            </div>
        </Form>
    );
};

export default SearchBar;
