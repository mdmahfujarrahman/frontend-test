const totalBar = [
    [0, 25],
    [25, 50],
    [50, 75],
    [75, 100],
    [100, 125],
    [125, 150],
    [150, 175],
    [175, 200],
    [200, 225],
    [225, 250],
];

// Helper for convert chart data
export const convertChartData = (chartData) => {
    const store = [];
    const storeAllStatus = chartData?.map((item) => item.deal_status);
    for (let i = 0; i < 10; i++) {
        const firstInd = totalBar[i][0];
        const lastInd = totalBar[i][1];
        const filterData = storeAllStatus
            .slice(firstInd, lastInd)
            .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            );
        store.push(filterData);
    }
    return store;
};
