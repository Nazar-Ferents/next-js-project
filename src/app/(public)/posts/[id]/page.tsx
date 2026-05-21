import {FC} from "react";
import PostDetailsComponent from "@/src/components/postsComponents/PostDetailsComponent/PostDetailsComponent";

type PropsType = {
    params:{id:string}
}
const PostDetailsPage:FC<PropsType> = async ({params}) => {

    const {id} = await params;

    return (
        <div>
            <hr/>
            <PostDetailsComponent id={id}/>
            </div>
    );
};

export default PostDetailsPage;