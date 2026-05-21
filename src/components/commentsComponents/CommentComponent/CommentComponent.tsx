import {FC} from "react";
import {IComment} from "@/src/modules/IComment";
import Link from "next/link";

type PropsType = {
    comment: IComment;
}
const CommentComponent:FC<PropsType> = ({comment}) => {
    return (
        <div className='card'>
            <h3 className='card-title'>{comment.name}</h3>
            <Link href={'/comments/'+comment.id} className='link-btn'>Details</Link>
        </div>
    );
};

export default CommentComponent;