import Link from "next/link";

const Menu = () => {
    return (
        <div className='navbar'>
            <ul className='nav-links'>
                <li className='nav-link'><Link href={'/'}>Home page</Link></li>
                <li className='nav-link'><Link href={'/users'}>Users Page</Link></li>
                <li className='nav-link'><Link href={'/posts'}>Posts Page</Link></li>
                <li className='nav-link'><Link href={'/comments'}>Comments Page</Link></li>
            </ul>
        </div>

    );
};

export default Menu;