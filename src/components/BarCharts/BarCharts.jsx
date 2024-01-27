import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { convertChartData } from "../../healper/convertChartData";
import propTypes from "prop-types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// chart js options
const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
};

const BarCharts = ({ chartData }) => {
    const data = {
        labels: [
            "1-25",
            "26-50",
            "51-75",
            "76-100",
            "101-125",
            "126-150",
            "151-175",
            "176-200",
            "201-225",
            "226-250",
        ],
        datasets: [
            {
                data: convertChartData(chartData),
                backgroundColor: "#020138cc",
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="flex justify-center items-center">
            <Bar options={options} data={data} />
        </div>
    );
};

BarCharts.propTypes = {
    chartData: propTypes.array.isRequired,
};

export default BarCharts;
