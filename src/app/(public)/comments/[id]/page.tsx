import {FC} from "react";
import CommentDetailsComponent from "@/src/components/commentsComponents/CommentDetailsComponent/CommentDetailsComponent";

type PropsType = {
    params: {id:string};
}
const CommentDetailsPage:FC<PropsType> = async ({params}) => {

    const {id} = await params
    return (
        <div>
            <CommentDetailsComponent id={id}/>
        </div>
    );
};

export default CommentDetailsPage;