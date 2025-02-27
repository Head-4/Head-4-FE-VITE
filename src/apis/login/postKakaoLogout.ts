import {axiosInstance} from "../index";

const postKakaoLogout = async () => {
    try {
        const response = await axiosInstance.post(`/api/v1/login/kakao/logout`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default postKakaoLogout;