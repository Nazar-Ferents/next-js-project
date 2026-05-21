import {getJSONApi} from "@/src/services/api.services";
import CommentComponent from "@/src/components/commentsComponents/CommentComponent/CommentComponent";

const CommentsComponent = async () => {

    const comments = await getJSONApi.getComments()
    return (
        <div className='grid'>
            {comments.map(comment => (<CommentComponent comment={comment}  key={comment.id}/>))}
        </div>
    );
};

export default CommentsComponent;