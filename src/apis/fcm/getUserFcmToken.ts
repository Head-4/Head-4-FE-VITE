import {axiosInstance} from "../index";

const getUserFcmToken = async () => {
    try {
        const response = await axiosInstance.get(`api/v1/user/check/fcm/token`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getUserFcmToken;