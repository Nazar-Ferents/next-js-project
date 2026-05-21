import {FC} from "react";
import {IComment} from "@/src/modules/IComment";

type PropsType = {
    comment: IComment
}
const CommentDetailsDom:FC<PropsType> = ({comment}) => {
    return (
        <div className='details'>
                <h1 className='card-title'>{comment.name}</h1>
                <p>{comment.body}</p>
                <p className='email'>{comment.email}</p>
        </div>
    );
};

export default CommentDetailsDom;