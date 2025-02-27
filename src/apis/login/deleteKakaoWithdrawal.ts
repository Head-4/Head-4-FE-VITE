import {axiosInstance} from "../index";

const deleteKakaoWithdrawal = async () => {
    try {
        const response = await axiosInstance.delete(`/api/v1/user/withdrawal`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default deleteKakaoWithdrawal;