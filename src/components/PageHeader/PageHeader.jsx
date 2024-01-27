import PropTypes from "prop-types";

const PageHeader = ({ title }) => {
    return (
        <div className="flex my-4">
            <h4 className="text-xl uppercase">{title}</h4>
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageHeader;
