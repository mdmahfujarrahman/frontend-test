import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import PageHeader from "../../components/PageHeader/PageHeader";
import BarCharts from "../../components/BarCharts/BarCharts";

const LeadsChart = () => {
    const { isLoading, leadsData } = useContext(AppContext);
    return (
        <div className="flex flex-col">
            <PageHeader title="Leads Chart" />
            {isLoading ? "loading" : <BarCharts chartData={leadsData} />}
        </div>
    );
};

export default LeadsChart;
