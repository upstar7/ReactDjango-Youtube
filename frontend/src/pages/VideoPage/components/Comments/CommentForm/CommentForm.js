import { useState } from "react";
import "./CommentForm.css";

export default function CommentForm(props) {
    // handle form data start
    const [formData, setFormData] = useState("");

    function handelChange(e) {
        setFormData(e.target.value);
    }
    const commentData = () => {
        const newComment = {
            content: formData,
        };
        setFormData("");
        return newComment;
    };
    // handle form data end

    return (
        <div className="comment-form" style={props.style}>
            <div className="comment-form--textarea">
                <textarea
                    value={formData}
                    onChange={handelChange}
                    placeholder="Post a comment"
                />
            </div>
            <button
                className="comment-form--button"
                onClick={() => {
                    if (props.isReplyFor) {
                        props.updateCommentsHandler(
                            commentData(),
                            props.isReplyFor
                        );
                    } else {
                        props.updateCommentsHandler(commentData());
                    }
                    // eslint-disable-next-line no-lone-blocks
                    // {
                    props.displayCommentForm && props.displayCommentForm();
                    // }
                }}
            >
                SEND
            </button>
        </div>
    );
}
