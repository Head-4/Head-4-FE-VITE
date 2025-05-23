import styled from "styled-components";
import DeleteIcon from "../../../assets/KeyWord/DeleteIcon.svg?react";
import {Keyword} from "../../../types";

interface KeyWordProps {
    it: Keyword;
    deleteUserKeyword: (notifyId: number) => void;
}

export default function KeyWord({it, deleteUserKeyword}: KeyWordProps) {
    return (
        <KeyWordDiv>
            <KeyWordContent>{it.keyword}</KeyWordContent>
            <DeleteButton onClick={() => deleteUserKeyword(it.notifyId)}>
                <DeleteIcon/>
            </DeleteButton>
        </KeyWordDiv>
    );
}

const KeyWordDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 8px 12px 8px 18px;
    border-radius: 20px;
    border: 1px solid ${({theme}) => theme.LightGray};
`;

const KeyWordContent = styled.span`
    color: ${({theme}) => theme.Gray600};
    font-weight: 600;
`;

const DeleteButton = styled.button`
    display: flex;
    color: #D2D2D2;

    &:active {
        color: ${({theme}) => theme.Blue};
    }
`;