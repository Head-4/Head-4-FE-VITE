import {initializeApp} from "firebase/app";
import {getMessaging, getToken, Messaging} from "firebase/messaging";

interface NotificationResponse {
    result: "success" | "fail";
    userFcmToken: string;
}

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FCM_APIKEY,
    authDomain: import.meta.env.VITE_APP_FCM_AUTHDOMAIN,
    projectId: import.meta.env.VITE_APP_FCM_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FCM_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FCM_SENDER_ID,
    appId: import.meta.env.VITE_APP_FCM_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const messaging: Messaging = getMessaging(app);

export async function handleAllowNotification(): Promise<NotificationResponse> {
    try {
        const permission: "granted" | "denied" | "default" = await Notification.requestPermission();

        if (permission === "granted") {
            const userFcmToken: string = await getToken(messaging, {
                vapidKey: import.meta.env.VITE_APP_VAPID_KEY
            });

            if (userFcmToken) {
                console.log("토큰 등록 : ", userFcmToken);
                return {result: "success", userFcmToken: userFcmToken};
            } else {
                console.log("권한 허용했는데 토큰은 못받음");
                return {result: "fail", userFcmToken: "fail"};
            }
        } else {
            console.log("web push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요");
            return {result: "fail", userFcmToken: "fail"};
        }
    } catch (error) {
        console.error("푸시 토큰 가져오는 중에 에러 발생", error);
        return {result: "fail", userFcmToken: "fail"};
    }
}