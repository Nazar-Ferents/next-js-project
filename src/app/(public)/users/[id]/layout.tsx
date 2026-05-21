import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UserDetailLayout'
}
type Props = { children: React.ReactNode }
const UserDetailLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default UserDetailLayout;