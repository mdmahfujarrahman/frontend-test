import { createContext, useEffect, useState } from "react";
import { AppServices } from "../services/appServices";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [LeadsData, setLeadsData] = useState([]);
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

    return (
        <AppContext.Provider value={{ LeadsData, isLoading, setIsLoading }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
