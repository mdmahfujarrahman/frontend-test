import MUIDataTable from "mui-datatables";
import propTypes from "prop-types";

const options = {
    download: false,
    print: false,
    filter: false,
    draggableColumns: {
        enabled: true,
    },
};

const CustomTable = ({ tableHeaders, tablesDatas }) => {
    return (
            <MUIDataTable
                title={"Leads Table"}
                data={tablesDatas}
                columns={tableHeaders}
                options={options}
            />
        
    );
};

CustomTable.propTypes = {
    tableHeaders: propTypes.array.isRequired,
    tablesDatas: propTypes.array.isRequired,
};

export default CustomTable;
