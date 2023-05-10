import React from "react";
import { useState } from "react";
import useVideos from "../../hooks/useVideos";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import { useLocation } from "react-router-dom";

const HomePage = () => {
    const { state } = useLocation();
    const [searchTerm, setSearchTerm] = useState(
        state?.searchTerm || "React/Django JWT"
    );
    const videos = useVideos(searchTerm);

    return (
        <div>
            <SearchBar
                searchTerm={searchTerm}
                onFormSubmit={(term) => setSearchTerm(term)}
            />
            <VideoList videos={videos} searchTerm={searchTerm} />
        </div>
    );
};

export default HomePage;
