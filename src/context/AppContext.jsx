import { createContext, useEffect, useMemo, useState } from "react";
import { AppServices } from "../services/appServices";
import PropTypes from "prop-types";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [leadsData, setLeadsData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getTaskDatas = async () => {
        setIsLoading(true);
        try {
            const res = await AppServices.getAllLeads();
            setIsLoading(false);
            setLeadsData(res.data.data);
        } catch (error) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTaskDatas();
    }, []);

    const AppData = useMemo(() => {
        return { leadsData, isLoading, setIsLoading };
    }, [leadsData, isLoading]);

    console.log(AppData);

    return (
        <AppContext.Provider value={AppData}>{children}</AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;
