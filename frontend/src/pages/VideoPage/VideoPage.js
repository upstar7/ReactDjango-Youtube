import React, { useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import useVideos from "../../hooks/useVideos";
import CommentsSection from "./components/Comments/CommentsSection";

const VideoPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        !state && navigate("/");
    }, [state, navigate]);

    const videos = useVideos(state?.video?.id);
    const handleBackClick = () => {
        navigate("/", { state: { searchTerm: state?.searchTerm } });
    };

    return (
        <Container>
            <Button
                className="mb-3 d-flex justify-content-start text-center px-4"
                variant="primary"
                size="lg"
                onClick={handleBackClick}
            >
                Back
            </Button>
            <Row>
                <Col lg={8} md={6}>
                    <VideoPlayer video={state?.video} />
                    <CommentsSection videoId={state?.video?.id?.videoId} />
                </Col>
                <Col lg={4} md={6}>
                    <RelatedVideos videos={videos} />
                </Col>
            </Row>
        </Container>
    );
};

export default VideoPage;
