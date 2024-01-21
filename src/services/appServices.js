import Axios from "axios";

const API = Axios.create({
    baseURL: "https://erp.seopage1.net/api",
});

const getAllLeads = () => API.get("/leads");

export const AppServices = {
    getAllLeads,
};
