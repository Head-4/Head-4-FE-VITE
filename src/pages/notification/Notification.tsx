import React, {useEffect} from 'react';
import NotificationDetail from "./components/NotificationDetail";
import styled from "styled-components";
import {useInView} from "react-intersection-observer";
import {NotificationType} from "../../types";
import {useNotifications} from "./hooks/useNotifications";

export default function Notification() {
    const {data, fetchNextPage, isFetchingNextPage, hasNextPage} = useNotifications();
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView])

    return (
        <>
            <NotificationUl>
                {data?.pages.map((page) =>
                    page?.pushLogs.map((it: NotificationType) =>
                        <NotificationDetail
                            key={it.pushId}
                            it={it}
                        />
                    )
                )}
            </NotificationUl>
            <NotificationComment ref={ref}>모든 알림은 90일간 보관돼요</NotificationComment>
        </>
    );
}

const NotificationUl = styled.ul`
    margin-top: 16px;
`;

const NotificationComment = styled.div`
    text-align: center;
    margin-top: 48px;
    color: ${({theme}) => theme.Gray400};
    font-size: 14px;
    font-weight: 500;
    flex: 1;
`;