import Link from "next/link";

const Menu = () => {
    return (
        <ul>
            <li><Link href={'/'}>Home page</Link></li>
            <li><Link href={'/users'}>Users Page</Link></li>
            <li><Link href={'/posts'}>Posts Page</Link></li>
            <li><Link href={'/comments'}>Comments Page</Link></li>
        </ul>
    );
};

export default Menu;