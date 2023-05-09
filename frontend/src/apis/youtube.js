import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 20,
        key: "AIzaSyACKB13e3Yf9rmhaTYJvuTq043GJMPYxEE",
    },
});
