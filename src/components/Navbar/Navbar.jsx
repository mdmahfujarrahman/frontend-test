import { Link, useLocation } from "react-router-dom";
import { NavbarItem } from "../../constant";

const Navbar = () => {
    const { pathname } = useLocation();
    return (
        <nav className="h-12 w-full flex justify-center items-center bg-primary">
            <ul className="flex gap-4  list-none text-white">
                {NavbarItem.map((item) => (
                    <li
                        key={item.id}
                        className={`cursor-pointer hover:bg-ternary py-1 px-3  rounded-md ${
                            pathname === item.path ? "bg-secondary" : ""
                        }`}
                    >
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
