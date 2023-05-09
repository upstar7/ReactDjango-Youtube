import React from "react";
import "./VideoPlayer.css";
const VideoPlayer = ({ video }) => {
    if (!video) {
        return <div>Loading Videos...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // console.log(videoSrc);
    return (
        <div>
            <div className="video-player">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="video-description">
                <h5>{video.snippet.title}</h5>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoPlayer;
