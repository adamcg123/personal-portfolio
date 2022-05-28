import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const categories = [
        // { name: 'About Me', description: 'Info about me' },
        { name: 'Resume', description: 'My resume' },
        { name: 'Portfolio', description: 'My portfolio and projects' },

    ];

    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Adam G
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick('About Me')}>
                            About me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick()}>
                            Contact
                        </span>
                    </li>
                    {
                        categories.map((category) => (
                            <li className="mx-1" key={category.name} >
                                <span onClick={() => { handleClick(category.name); }}>
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;