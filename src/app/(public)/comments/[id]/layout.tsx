import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CommentDetailLayout'
}
type Props = { children: React.ReactNode }
const CommentDetailLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default CommentDetailLayout;