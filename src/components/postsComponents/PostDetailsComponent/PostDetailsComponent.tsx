import React, {FC} from 'react';
import {getJSONApi} from "@/src/services/api.services";
import PostDetailsDOM from "@/src/components/postsComponents/PostDetailsDOM/PostDetailsDOM";

type PropsType = {
    id: string
}

const PostDetailsComponent: FC<PropsType> = async ({id}) => {

    const post = await getJSONApi.getPost(+id)
    return (
        <div>
            <PostDetailsDOM post={post}/>
        </div>
    );
};

export default PostDetailsComponent;