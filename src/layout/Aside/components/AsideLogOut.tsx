import styled from "styled-components";
import useAsideStore from "../../../store/AsideStore";
import { usePostKakaoLogout } from "../hooks/usePostKakaoLogout.ts";
import { useDeleteKakaoWithdrawal } from "../hooks/useDeleteKakaoWithdrawal.ts";
import { useNavigate } from "react-router-dom";

export default function AsideLogOut() {
    const toggleAside = useAsideStore((state) => state.toggleAside);
    const postKakaoLogout = usePostKakaoLogout();
    const deleteKakaoWithdrawal = useDeleteKakaoWithdrawal();
    const navigate = useNavigate();

    const clickLogOut = async () => {
        await postKakaoLogout();
        toggleAside();
        navigate('/');
    }

    const clickWithdrawal = async () => {
        await deleteKakaoWithdrawal();
        toggleAside();
        navigate('/');
    }

    return (
        <>
            <LogOutButton onClick={clickLogOut}>
                로그아웃
            </LogOutButton>
            <WithdrawalButton onClick={clickWithdrawal}>
                탈퇴하기
            </WithdrawalButton>
        </>
    );
}

const LogOutButton = styled.button`
    position: absolute;
    left: 20px;
    bottom: 140px;
    color: #A9A9A9;
    font-size: 12px;
    font-weight: 500;
    text-decoration-line: underline;
`;

const WithdrawalButton = styled.button`
    position: absolute;
    right: 20px;
    bottom: 140px;
    color: #A9A9A9;
    font-size: 12px;
    font-weight: 500;
    text-decoration-line: underline;
`;