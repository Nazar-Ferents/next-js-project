import Link from "next/link";

const Menu = () => {
    return (
        <ul>
            <li><Link href='/'>Home Page</Link></li>
            <li><Link href={'/forms/carsForm'}>Go to Form for adding new car</Link></li>
            <li><Link href='/cars'>Go to Cars List</Link></li>

        </ul>
    );
};

export default Menu;