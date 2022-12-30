import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Galib E-Shop. All rights reserved.
                        </p>
                        <ul className="flex items-center">
                            <li className="mr-6">
                                <a className="text-gray-400 hover:text-white" href="#">
                                    Facebook
                                </a>
                            </li>
                            <li className="mr-6">
                                <a className="text-gray-400 hover:text-white" href="#">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
