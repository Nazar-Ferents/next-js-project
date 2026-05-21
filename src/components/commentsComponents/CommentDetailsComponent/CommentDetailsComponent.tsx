import {FC} from "react";
import {getJSONApi} from "@/src/services/api.services";
import CommentDetailsDOM from "@/src/components/commentsComponents/CommentDetailsDOM/CommentDetailsDOM";

type PropsType = {
    id: string
}
const CommentDetailsComponent:FC<PropsType> = async ({id}) => {

    const comment = await getJSONApi.getComment(+id)
    return (
        <div>
               <CommentDetailsDOM comment={comment}/>
        </div>
    );
};

export default CommentDetailsComponent;