import { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";
import "./Comment.css";

export default function Comment(props) {
    const [, token] = useAuth();

    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);

    const style = props.isReplies ? { width: "80%", marginLeft: "auto" } : {};

    const [formVisibility, setFormVisibility] = useState({
        display: "none",
        width: "80%",
        marginLeft: "auto",
    });

    // update form display start
    const displayCommentForm = () => {
        setFormVisibility((oldData) => {
            if (oldData.display === "none") {
                return {
                    ...oldData,
                    display: "flex",
                };
            } else {
                return {
                    ...oldData,
                    display: "none",
                };
            }
        });
    };
    // update form display end

    // update score script start
    const onLikeHandler = async () => {
        await axios
            .put(
                `http://localhost:8000/api/comments/comment_id/${props.id}`,
                {
                    likes: true,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((res) => {
                if (res.data.status === "success") {
                    setLikes(res.data.comment.likes);
                }
            });
    };

    const onDislikeHandler = async () => {
        await axios
            .put(
                `http://localhost:8000/api/comments/comment_id/${props.id}`,
                {
                    dislikes: true,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((res) => {
                if (res.data.status === "success") {
                    setDislikes(res.data.comment.dislikes);
                }
            });
    };

    // update score script end

    return (
        <>
            <div className="comment" style={style}>
                {!props.isReplies && (
                    <div className="comment--count">
                        <p
                            className="comment--count__add"
                            onClick={onLikeHandler}
                        >
                            <span>👍</span>
                            <span> {likes}</span>
                        </p>

                        <p
                            className="comment--count__sub"
                            onClick={onDislikeHandler}
                        >
                            <span>👎</span>
                            <span> {dislikes}</span>
                        </p>
                    </div>
                )}
                <div className="comment--body">
                    <div className="comment--body__header">
                        <div className="comment--user--info">
                            <p className="comment--user--info__name">
                                {props.username}
                            </p>
                            {props.isYou && (
                                <p className="comment--user--info__badge">
                                    you
                                </p>
                            )}
                        </div>
                        {!props.isReplies && (
                            <div className="comment--action">
                                <div className="comment--action__reply">
                                    <p
                                        className="comment--action__reply__text"
                                        onClick={displayCommentForm}
                                    >
                                        <img
                                            className="comment--action__reply__img"
                                            src="/assets/images/icon-reply.png"
                                            alt=""
                                        />
                                        Reply
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="comment--content">{props.text}</div>
                </div>
            </div>
            {formVisibility.display === "flex" && (
                <CommentForm
                    style={formVisibility}
                    displayCommentForm={displayCommentForm}
                    isReplyFor={props.id}
                    updateCommentsHandler={props.updateCommentsHandler}
                />
            )}
        </>
    );
}
