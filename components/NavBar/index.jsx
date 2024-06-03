import Link from 'next/link';

export default function NavBar() {
    return (
        <nav>
            <div>
                <p>LOGO</p>
            </div>
            <div className='links'>
                <Link href='/'>Home</Link>
                <Link href='/'>Page 2</Link>
                <Link href='/'>Page 3</Link>
            </div>
        </nav>
    )
}