import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PostDetailLayout'
}
type Props = { children: React.ReactNode }
const PostDetailLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default PostDetailLayout;