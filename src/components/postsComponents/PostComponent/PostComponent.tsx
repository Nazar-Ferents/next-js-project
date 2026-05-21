import {FC} from "react";
import {IPost} from "@/src/modules/IPost";
import Link from "next/link";

type PropsType = {
    post:IPost;
}
const PostComponent:FC<PropsType> = ({post}) => {
    return (
        <div className='card'>
            <h3 className='card-title'>{post.title}</h3>
            <Link href={'posts/'+post.id} className='link-btn'>Details</Link>
        </div>
    );
};

export default PostComponent;