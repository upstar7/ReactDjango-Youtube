import React from "react";
import RelatedVideoItem from "../RelatedVideoItem/RelatedVideoItem";
import "./RelatedVideos.css";

const RelatedVideos = ({ videos, searchTerm }) => {
    const renderedList = videos?.map((video) => {
        return (
            <div key={video.id.videoId}>
                <RelatedVideoItem video={video} searchTerm={searchTerm} />
                <hr className="horizontal-line" />
            </div>
        );
    });

    return (
        <div className="relatedVideo-container">
            <h3>Related Videos</h3>
            <div className="justify-content-center">{renderedList}</div>;
        </div>
    );
};

export default RelatedVideos;
