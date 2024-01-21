import { createBrowserRouter as Router } from "react-router-dom";

// Screens 
import App from "../App";
import Home from "../screens/Home/Home";
import LeadsChart from "../screens/LeadsChart/LeadsChart";
import LeadsTable from "../screens/LeadsTable/LeadsTable";

const routes = Router([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/leads-table",
                element: <LeadsTable />,
            },
            {
                path: "/leads-chart",
                element: <LeadsChart />,
            },
        ],
    },
]);

export default routes;
