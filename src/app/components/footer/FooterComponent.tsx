'use client'

import {useEffect} from "react";

const FooterComponent = () => {
    useEffect(() => {
        console.log(localStorage)
    },[])
    return (
        <div>
                <footer></footer>
        </div>
    );
};

export default FooterComponent;