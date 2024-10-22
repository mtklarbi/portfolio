import React from 'react';
import './style.css';

interface HeaderProps {
    title: string;
    logo?: string;
}

const Header: React.FC<HeaderProps> = ({ title, logo }) => {
    return (
        <header className="header">
            <div className="header-content">
                {logo && <img src={logo} alt={`${title} logo`} className="header-logo" />}
                <h1 className="header-title">{title}</h1>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/profile" className="nav-link">
                                My Profile
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;