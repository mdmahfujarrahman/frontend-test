import React from "react";

const PageHeader = ({ title }) => {
    return (
        <div className="flex my-4">
            <h4 className="text-xl uppercase">{title}</h4>
        </div>
    );
};

export default PageHeader;
