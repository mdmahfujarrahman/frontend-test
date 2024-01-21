import { Link } from "react-router-dom";
import { NavbarItem } from "../../constant";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const { pathname } = useLocation();
    console.log(pathname);
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
