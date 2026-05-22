import {FC} from "react";

type  PropsType = {
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
}
const SubmitPage:FC<PropsType> = async ({searchParams}) => {

    const awaitedSP = await searchParams;

    
    return (
        <div>
             this is a form submit Page {awaitedSP.name}
        </div>
    );
};

export default SubmitPage;