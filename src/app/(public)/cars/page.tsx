import {carServiceAPI} from "@/src/app/services/car.service";
import CarComponent from "@/src/app/components/CarComponents/CarComponent";


const CarsPage = async () => {

    const cars =await carServiceAPI.getCars()
    return (
        <div>
            {
                cars.map(car => (<CarComponent key={car.id} car={car} />))
            }
        </div>
    );
};
export const dynamic = "force-dynamic"
export default CarsPage;