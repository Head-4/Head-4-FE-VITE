import {axiosInstance} from "../index";

const getValidate = async () => {
    try {
        const response = await axiosInstance.get(`api/v1/user/validate`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getValidate;