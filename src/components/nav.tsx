import { Link } from "gatsby";
import React from "react";

interface Props {

}

const Nav: React.FunctionComponent<Props> = ({}) => {
    return (
        <nav className="m-2 rounded border border-gray-800 bg-gray-800">
            <ul className="flex flex-col md:flex-row gap-4 text-center">
                <li className="p-4 flex-1 md:border-r-2 border-gray-400">
                    <Link to="/">BradCypert.com</Link>
                </li>
                <li className="p-4 flex-1 group md:border-r-2 border-gray-400 cursor-pointer">
                    <div>Language Specific Resources</div>
                    <ul className="absolute hidden hover:block group-hover:block border border-gray-800 bg-gray-800 z-50 p-4">
                        <li>
                            <Link to="/clojure-resources">
                                Clojure
                            </Link>
                        </li>
                        <li>
                            <Link to="/dart-resources">
                                Dart &amp; Flutter
                            </Link>
                        </li>
                        <li>
                            <Link to="/java-resources">
                                Java
                            </Link>
                        </li>
                        <li>
                            <Link to="/javascript-resources">
                                JavaScript / TypeScript
                            </Link>
                        </li>
                        <li>
                            <Link to="/kotlin-resources">
                                Kotlin &amp; Android
                            </Link>
                        </li>
                        <li>
                            <Link to="/php-resources">
                                PHP
                            </Link>
                        </li>
                        <li>
                            <Link to="/scala-resources">
                                Scala
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="p-4 flex-1 md:border-r-2 border-gray-400">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="p-4 flex-1 group cursor-pointer">
                    <div>About</div>
                    <ul className="absolute hidden hover:block group-hover:block border border-gray-800 bg-gray-800 z-50 p-4">
                        <li>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/resume">
                                Resume
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;