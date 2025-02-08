import Link from "next/link";

import './menu.css';

export const Menu = () => {
    return (
        <>
            <ul className="menu">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/cars">Cars</Link>
                </li>
                <li>
                    <Link href="/create-car">Create Car</Link>
                </li>
            </ul>
            <hr/>
        </>
    );
};
