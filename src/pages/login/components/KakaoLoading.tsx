import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import postKakaoToken from "../../../apis/login/postKakaoToken";
import {queryKeys} from "../../../tanstack-query/constants.ts";
import {useQueryClient} from "@tanstack/react-query";

export default function KakaoLoading() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const GetToken = async (code: string): Promise<void> => {
        try {
            const result = await postKakaoToken(code);
            if (!result) {
                alert('토큰을 받아올 수 없습니다.');
                navigate('/');
                return;
            }

            localStorage.setItem("accessToken", result.headers['authorization']);
            localStorage.setItem('isFirst', result.data.data);
            await queryClient.refetchQueries({queryKey: [queryKeys.userAuth]});
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        if (code) {
            GetToken(code);
        } else {
            //에러처리
        }
    }, []);

    return (
        <>
        </>
    );
}
