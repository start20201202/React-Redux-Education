import React from 'react';

function Header() {
    return (
        <div>
            <nav className="indigo darken-2">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">
                        React-Api
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="!#">GitHub</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export { Header };
