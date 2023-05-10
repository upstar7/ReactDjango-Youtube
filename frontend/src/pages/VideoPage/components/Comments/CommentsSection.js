import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm/CommentForm";
import CommentGroup from "./CommentGroup/CommentGroup";
import useAuth from "../../../../hooks/useAuth";

import "./CommentsSection.css";

export default function CommentsSection({ videoId }) {
    const [comments, setComments] = useState([]);
    const [user, token] = useAuth();

    // get data from server by axios start
    const getData = async () => {
        await axios
            .get(`http://127.0.0.1:8000/api/comments/video_id/${videoId}`)
            .then((response) => {
                setComments(response.data.comments);
            });
    };
    // get data from server by axios start

    // update UI  start
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId]);
    // update UI  end

    // add comments script start
    async function updateCommentsHandler(newComments, isReplyTo = null) {
        if (newComments.content) {
            if (isReplyTo) {
                await axios.post(
                    "http://127.0.0.1:8000/api/replies/",
                    {
                        comment: isReplyTo,
                        text: newComments.content,
                    },
                    {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    }
                );
                getData();
                return;
            }

            await axios.post(
                "http://127.0.0.1:8000/api/comments/",
                {
                    video_id: videoId,
                    text: newComments.content,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            getData();
        }
    }
    // add comments script end

    // render ui components script start
    const comments_in_screen = comments.map((item) => {
        return (
            <CommentGroup
                commentsLength={comments.length}
                username={item.user.username}
                text={item.text}
                likes={item.likes}
                dislikes={item.dislikes}
                isYou={item.user.id === user.id}
                key={item.id}
                id={item.id}
                replies={item.replies}
                updateCommentsHandler={updateCommentsHandler}
            />
        );
    });
    // render ui components script start

    return (
        <div className="comment-section">
            {comments_in_screen}
            <CommentForm
                updateCommentsHandler={updateCommentsHandler}
                videoId={videoId}
            />
        </div>
    );
}
