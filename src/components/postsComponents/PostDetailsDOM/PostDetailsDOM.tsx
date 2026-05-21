import {FC} from "react";
import {IPost} from "@/src/modules/IPost";

type PropsType = {
    post: IPost
}
const PostDetailsDom:FC<PropsType> = ({post}) => {
    return (
        <div className='details'>
               <h1 className='card-title'>{post.title}</h1>
               <p>{post.body}</p>
        </div>
    );
};

export default PostDetailsDom;