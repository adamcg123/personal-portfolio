import react from "react";

function Nav() {
    const categories = [
        { name: 'resume', description: 'test' }
    ];

    const handleClick = () => {
        console.log("click handled")
    }

    return (
        <header>
            <h2>
                <a href="/">
                    <span>Adam G</span>
                </a>
            </h2>
            <nav>
                <ul className="">
                    <li className="">
                        <a href="#about" onClick={() => handleClick()}>
                            resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav