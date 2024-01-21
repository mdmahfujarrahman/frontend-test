import MUIDataTable from "mui-datatables";

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
        <>
            <MUIDataTable
                title={"Leads Table"}
                data={tablesDatas}
                columns={tableHeaders}
                options={options}
            />
        </>
    );
};

export default CustomTable;
