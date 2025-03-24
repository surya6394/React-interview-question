import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div
                id="default-sidebar"
                className={`fixed z-50 h-full w-64 bg-bgclr2 dark:bg-gray-800 transition-transform duration-300 ease-in-out transform ${isMenuOpen
                    ? "mt-4 pl-12 h-60 bg-black overflow-y-auto"
                    : "hidden md:block"
                    } sm:relative sm:translate-x-0 md:fixed`}
                aria-label="Sidebar"
            >
                <div className="px-3 py-4 pt-5 overflow-y-auto h-screen text-white">
                    <ul className="space-y-2 font-medium">
                        <li className={`li-style ${location.pathname === "/dashboard/accountSetting" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/accountSetting">
                                <span className="flex-1 ms-3 whitespace-nowrap">Account Setting</span>
                            </Link>
                        </li>

                        <li className={`li-style ${location.pathname === "/dashboard/help" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/help">
                                <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
                            </Link>
                        </li>
                        <li className={`li-style ${location.pathname === "/dashboard/accountSetting" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/accountSetting">
                                <span className="flex-1 ms-3 whitespace-nowrap">Account Setting</span>
                            </Link>
                        </li>

                        <li className={`li-style ${location.pathname === "/dashboard/help" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/help">
                                <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
                            </Link>
                        </li>
                        <li className={`li-style ${location.pathname === "/dashboard/accountSetting" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/accountSetting">
                                <span className="flex-1 ms-3 whitespace-nowrap">Account Setting</span>
                            </Link>
                        </li>

                        <li className={`li-style ${location.pathname === "/dashboard/help" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/help">
                                <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
                            </Link>
                        </li>
                        <li className={`li-style ${location.pathname === "/dashboard/accountSetting" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/accountSetting">
                                <span className="flex-1 ms-3 whitespace-nowrap">Account Setting</span>
                            </Link>
                        </li>

                        <li className={`li-style ${location.pathname === "/dashboard/help" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/help">
                                <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
                            </Link>
                        </li>
                        <li className={`li-style ${location.pathname === "/dashboard/accountSetting" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/accountSetting">
                                <span className="flex-1 ms-3 whitespace-nowrap">Account Setting</span>
                            </Link>
                        </li>

                        <li className={`li-style ${location.pathname === "/dashboard/help" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/help">
                                <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
                            </Link>
                        </li>

                        <li className={`li-style ${location.pathname === "/dashboard/accountSetting" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/accountSetting">
                                <span className="flex-1 ms-3 whitespace-nowrap">Account Setting</span>
                            </Link>
                        </li>

                        <li className={`li-style ${location.pathname === "/dashboard/help" ? "bankNavbarStyle" : ""}`}>
                            <Link to="/dashboard/help">
                                <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar