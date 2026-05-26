import React, {FC} from 'react';
import {ICar} from "@/src/app/modules/ICar";

type PropsType = {
    car:ICar
}
const CarComponent: FC<PropsType> = ({car}) => {
    return (
        <div className='car-card'>
                <h3>{car.brand}</h3>
                <p>Price: <span>{car.price}</span></p>
                <p>Year: <span>{car.year}</span></p>
        </div>
    );
};

export default CarComponent;