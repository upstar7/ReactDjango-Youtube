import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useVideos from "../../hooks/useVideos";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import { useLocation } from "react-router-dom";

const HomePage = () => {
    // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //TODO: Add an AddCars Page to add a car for a logged in user's garage
    const { state } = useLocation();
    const [user, token] = useAuth();
    const [searchTerm, setSearchTerm] = useState(state?.searchTerm || "");
    const videos = useVideos(searchTerm);
    // const [selectedVideo, setSelectedVideo] = useState(null);
    // const [cars, setCars] = useState([]);

    // useEffect(() => {
    //     const fetchCars = async () => {
    //         try {
    //             let response = await axios.get(
    //                 "http://127.0.0.1:8000/api/cars/",
    //                 {
    //                     headers: {
    //                         Authorization: "Bearer " + token,
    //                     },
    //                 }
    //             );
    //             setCars(response.data);
    //         } catch (error) {
    //             console.log(error.response.data);
    //         }
    //     };
    //     fetchCars();
    // }, [token]);
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
