// Helper for convert chart data
export const convertChartData = (chartData, totalItem = 25) => {
    console.log("chartData", chartData);
    const store = [];
    const storeAllStatus = chartData?.map((item) => item.deal_status);
    for (let i = 0; i < 10; i++) {
        const lastIndex = totalItem * (i + 1);
        const firstIndex = lastIndex - totalItem;
        const filterData = storeAllStatus
            .slice(firstIndex, lastIndex)
            .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            );
        store.push(filterData);
    }
    return store;
};
