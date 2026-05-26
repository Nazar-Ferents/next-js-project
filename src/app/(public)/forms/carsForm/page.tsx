'use client'
import {sendCar} from "@/src/app/actions/car.actions";
import {CarFormData, carSchema} from "@/lib/schema/shema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Link from "next/link";

const CarsFromPage = () => {

    const {register, handleSubmit, formState:{errors,isValid}} = useForm<CarFormData>(

        {
            resolver:zodResolver(carSchema),
            mode:'all'
        }
    )

    return (
        <div>
            <form onSubmit={handleSubmit(sendCar)}>
                <div>
                    <input {...register('brand')} placeholder="Brand" />
                    {errors.brand && (<p>{errors.brand.message}</p>)}
                </div>
                <div>
                    <input type='number' {...register('price', {valueAsNumber:true})} placeholder="Price" />
                    {errors.price && (<p>{errors.price.message}</p>)}
                </div>
                <div>
                    <input type='number' {...register('year', {valueAsNumber:true}) } placeholder="Year" />
                    {errors.year && (<p>{errors.year.message}</p>)}
                </div>
                <button type='submit' disabled={!isValid}>Send</button>
            </form>



        </div>
    );
};

export default CarsFromPage;