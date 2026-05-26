import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CarsFormLayout'
}
type Props = { children: React.ReactNode }
const CarsFormLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default CarsFormLayout;