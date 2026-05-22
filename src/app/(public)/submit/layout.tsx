import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'SubmitLayout'
}
type Props = { children: React.ReactNode }
const SubmitLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default SubmitLayout;