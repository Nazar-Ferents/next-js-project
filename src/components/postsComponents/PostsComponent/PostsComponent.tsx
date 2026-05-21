import {getJSONApi} from "@/src/services/api.services";
import PostComponent from "@/src/components/postsComponents/PostComponent/PostComponent";

const PostsComponent = async () => {

    const posts = await getJSONApi.getPosts()
    return (
        <div className='grid'>
            {posts.map((post) => (<PostComponent post={post} key={post.id} />))}
        </div>
    );
};

export default PostsComponent;