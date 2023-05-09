import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({ videos, searchTerm }) => {
    const renderedList = videos?.map((video) => {
        return (
            <Col lg={3} md={4} sm={6} key={video.id.videoId}>
                <VideoItem video={video} searchTerm={searchTerm} />
            </Col>
        );
    });

    return (
        <Container>
            <Row className="justify-content-center">{renderedList}</Row>
        </Container>
    );
};

export default VideoList;
