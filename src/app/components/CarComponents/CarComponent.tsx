import React, {FC} from 'react';
import {ICar} from "@/src/app/modules/ICar";
import Link from "next/link";

type PropsType = {
    car:ICar
}
const CarComponent: FC<PropsType> = ({car}) => {
    return (
        <div>
            
            <div>
                <h2>Cars List </h2>
                <h3>{car.brand}</h3>
                <p>Price: {car.price}</p>
                <p>Year: {car.year}</p>
            </div>



        </div>
    );
};

export default CarComponent;