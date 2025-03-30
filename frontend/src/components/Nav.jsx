const Nav = () => {
    return (
        <nav className="flex justify-between w-screen p-5">
            <h2>Troy Nelson</h2>
            <ul className="flex">
                <li>
                    <a href="#about">
                        ABOUT
                    </a>
                </li>
                <li className='pl-[25px]'>
                    <a href="#experience">
                        EXPERIENCE
                    </a>
                </li>
                <li className="pl-[25px]">CONTACT</li>
            </ul>
        </nav>
    )
}

export default Nav;