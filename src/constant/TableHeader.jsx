import { Link } from "react-router-dom";

export const LeadsTableHeaders = [
    {
        name: "id",
        label: "Id",
        options: {
            filter: false,
            sort: true,
        },
    },
    {
        name: "client_name",
        label: "Client Name",
        options: {
            filter: false,
            sort: true,
            customBodyRender: (value) => {
                return (
                    <>
                        <span className="w-28">{value}</span>
                    </>
                );
            },
        },
    },
    {
        name: "project_link",
        label: "Project Link",
        options: {
            filter: false,
            sort: true,
            customBodyRender: (value) => {
                return (
                    <>
                        <Link
                            to={value}
                            className="py-[4px] px-2 bg-primary rounded text-white"
                        >
                            Visit Link
                        </Link>
                    </>
                );
            },
        },
    },

    {
        name: "value",
        label: "Project Budget",
        options: {
            filter: false,
            sort: true,
            customBodyRender: (value) => {
                return <span>{value} $</span>;
            },
        },
    },
    {
        name: "bid_value",
        label: "Bid Value",
        options: {
            filter: false,
            sort: true,
            customBodyRender: (value) => {
                return <span>{value} $</span>;
            },
        },
    },
    {
        name: "country",
        label: "Country",
        options: {
            filter: false,
            sort: true,
        },
    },
    {
        name: "deal_status",
        label: "Status",
        options: {
            filter: false,
            sort: true,
            customBodyRender: (value) => {
                console.log(value);
                return (
                    <>
                        {value === 1 ? (
                            <div className="py-1 px-2 bg-green-700 flex justify-center items-center text-white rounded-md">
                                <p>Converted to Deal</p>
                            </div>
                        ) : (
                            <div className="py-1 px-2 bg-red-700 flex justify-center items-center text-white rounded-md">
                                <p>Not Converted to Deal</p>
                            </div>
                        )}
                    </>
                );
            },
        },
    },
    {
        name: "deal_status",
        label: "Deal Status",
        options: {
            filter: false,
            sort: true,
            customBodyRender: (value) => {
                console.log(value);
                return (
                    <>
                        {value === 1 ? (
                            <div className="py-[2px] px-2 bg-gray-400  flex justify-center items-center rounded-md">
                                <p>No Activity Yet</p>
                            </div>
                        ) : (
                            <div className="py-1 px-2  flex justify-center items-center  rounded-md">
                                <p>Not Applicable</p>
                            </div>
                        )}
                    </>
                );
            },
        },
    },
];
