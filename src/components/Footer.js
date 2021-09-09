import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="indigo darken-2">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()}
                        <a className="grey-text text-lighten-4 right" href="#!">
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export { Footer };
