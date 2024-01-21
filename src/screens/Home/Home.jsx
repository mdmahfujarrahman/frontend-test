import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex gap-3">
                <Link
                    to={"/leads-table"}
                    className="bg-primary py-2 px-5 rounded text-white"
                >
                    Leads Table
                </Link>
                <Link
                    to={"/leads-chart"}
                    className="bg-primary py-2 px-5 rounded text-white"
                >
                    Leads Chart
                </Link>
            </div>
        </div>
    );
};

export default Home;
