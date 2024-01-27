import { dummyArray } from "../../constant";

const TableSkeleton = () => {
    return (
        <div className="flex flex-col border shadow-2xl p-4">
            <div className="flex justify-between mb-4">
                <div className="h-7 w-20 animate-pulse bg-slate-500 rounded-sm" />
                <div className="flex gap-3">
                    <div className="h-7 w-10 animate-pulse bg-slate-500 rounded-sm" />
                    <div className="h-7 w-10 animate-pulse bg-slate-500 rounded-sm" />
                </div>
            </div>
            <div className="border-b-2 mb-4" />
            {dummyArray.slice(0, 10).map((item) => {
                return (
                    <div key={item} className="flex w-full gap-5 mb-4">
                        {dummyArray.slice(0, 8).map((itemChild) => {
                            return (
                                <div
                                    key={itemChild}
                                    className="h-7 w-[16%] animate-pulse bg-slate-500 rounded-sm"
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default TableSkeleton;
