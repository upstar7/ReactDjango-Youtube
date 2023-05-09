import Comment from "../Comment/Comment";
import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";
import { useEffect, useState } from "react";

export default function GroupComment(props) {
    const [replies, setReplies] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        setReplies([]);
        const getData = async () => {
            if (props.replies.length) {
                const res = await axios
                    .get(
                        `http://localhost:8000/api/replies/comment_id/${props.id}`,
                        {
                            headers: {
                                Authorization: "Bearer " + token,
                            },
                        }
                    )
                    .catch((error) => {
                        if (error.response) {
                            // Request made and server responded
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            // The request was made but no response was received
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log("Error", error.message);
                        }
                    });
                setReplies(res.data.replies);
            }
        };

        getData();
    }, [props.replies, props.id]);

    return (
        <>
            {/* {props.isReplayFor.length <= 0 && ( */}
            <Comment
                // createdAt={props.createdAt}
                username={props.username}
                // image={props.image}
                text={props.text}
                likes={props.likes}
                dislikes={props.dislikes}
                // score={props.score}
                isYou={props.isYou}
                // handelDeleteComment={props.handelDeleteComment}
                id={props.id}
                isReplyingTo={props.isReplyingTo}
                updateCommentsHandler={props.updateCommentsHandler}
            />
            {/* )} */}
            {props.replies.length > 0 &&
                replies.map((item) => {
                    return (
                        <Comment
                            isReplies={true}
                            // createdAt={item.data.data.createdAt}
                            username={item.user.username}
                            // image={props.image}
                            text={item.text}
                            // likes={props.likes}
                            // dislikes={props.dislikes}
                            // score={props.score}
                            isYou={item.user.id === user.id}
                            // handelDeleteComment={props.handelDeleteComment}
                            id={item}
                            key={item.id}
                            // isReplyingTo={props.isReplyingTo}
                            // updateCommentsHandler={props.updateCommentsHandler}
                        />
                    );
                })}
        </>
    );
}
