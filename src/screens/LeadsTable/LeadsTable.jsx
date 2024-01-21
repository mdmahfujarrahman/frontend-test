import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { LeadsTableHeaders } from "../../constant/TableHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import TableSkeleton from "../../components/Loder/TableSkeleton";
import CustomTable from "../../components/CustomTable/CustomTable";

const LeadsTable = () => {
    const { LeadsData, isLoading } = useContext(AppContext);
    return (
        <div className="flex flex-col">
            <PageHeader title={"Leads Table"} />
            {isLoading ? (
                <TableSkeleton />
            ) : (
                <CustomTable
                    tablesDatas={LeadsData}
                    tableHeaders={LeadsTableHeaders}
                />
            )}
        </div>
    );
};

export default LeadsTable;
