import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Overlay from "../styles/Common/Overlay.ts";
import Typography from "./Typography.tsx";
import iOSInstallGuide from "../assets/Login/iOSInstallGuide.png";
import CommonButton from "./CommonButton.tsx";
import MainLogo from "../assets/Logo/MainLogo.svg?react";

// BeforeInstallPromptEvent 인터페이스 정의
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;

  prompt(): Promise<void>;
}

// iOS의 navigator 확장 인터페이스 정의
interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

// 전역 변수로 이벤트 저장 (컴포넌트 마운트 전에도 이벤트 캡처 가능)
let deferredPromptEvent: BeforeInstallPromptEvent | null = null;

// 이벤트 리스너를 일찍 등록 (문서 로딩 전에)
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    // 브라우저 기본 설치 프롬프트 방지
    e.preventDefault();
    // 이벤트 전역 변수에 저장
    deferredPromptEvent = e as BeforeInstallPromptEvent;
    console.log('Global: beforeinstallprompt 이벤트가 발생했습니다!', e);
  });
}

const PWAInstallBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [installable, setInstallable] = useState(false);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    // 이미 설치되어 있는지 확인 (standalone 모드)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as NavigatorWithStandalone).standalone;

    // 설치되어 있지 않고, iOS가 아니거나 저장된 프롬프트 이벤트가 있는 경우 배너 표시
    const shouldShowBanner = !isStandalone && (deferredPromptEvent !== null || isIOS);

    setShowBanner(shouldShowBanner);
    setInstallable(deferredPromptEvent !== null);

    // 전역에 저장된 설치 이벤트가 있는지 확인
    if (deferredPromptEvent) {
      console.log('저장된 설치 프롬프트 이벤트가 있습니다.');
      setInstallable(true);
    }

    // 나중에 이벤트가 발생할 경우 처리
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPromptEvent = e as BeforeInstallPromptEvent;
      setInstallable(true);
      setShowBanner(true);
      console.log('설치 프롬프트 이벤트가 발생했습니다!');
    };

    // 사용자가 이미 설치한 경우 처리
    const handleAppInstalled = () => {
      setShowBanner(false);
      console.log('앱이 설치되었습니다!');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isIOS]);

  const handleInstallClick = async () => {
    if (!installable) {
      console.log('현재 설치 불가능');
    }

    try {
      if (deferredPromptEvent) {
        // 설치 프롬프트 표시
        deferredPromptEvent.prompt();

        // 사용자 선택 결과 대기
        const {outcome} = await deferredPromptEvent.userChoice;

        if (outcome === 'accepted') {
          console.log('사용자가 앱 설치를 수락했습니다.');
        } else {
          console.log('사용자가 앱 설치를 거부했습니다.');
        }

        // 프롬프트 초기화
        deferredPromptEvent = null;
        setInstallable(false);
      }
    } catch (error) {
      console.error('앱 설치 중 오류:', error);
    } finally {
      setShowBanner(false);
    }
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  let Banner = (
    <>
      <Overlay onClick={closeBanner}/>
      <PWAModalDiv>
        <StyledMainLogo/>
        <Typography typoSize="T1" color="Black" textAlign="center" style={{margin: "44px 0 4px"}}>
          터치 한 번으로<br/>바로 시작해 보세요!
        </Typography>
        <CommonButton isActive={true} onClick={handleInstallClick}>
          앱 내려받기
        </CommonButton>
      </PWAModalDiv>
    </>
  );

  if (isIOS) {
    Banner = (
      <>
        <Overlay onClick={closeBanner}/>
        <PWAModalDiv>
          <StyledMainLogo/>
          <Typography typoSize="T1" color="Black" textAlign="center" style={{margin: "44px 0 4px"}}>
            iOS에서 설치하기
          </Typography>
          <GuideImage src={iOSInstallGuide} alt="iOS 설치 가이드"/>
          <CommonButton isActive={true} onClick={closeBanner}>
            닫기
          </CommonButton>
        </PWAModalDiv>
      </>
    );
  }

  return (
    <>
      {Banner}
    </>
  );
};

export default PWAInstallBanner;

const PWAModalDiv = styled.div`
    text-align: center;
    background-color: ${({theme}) => theme.White};
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    border-radius: 20px;
    padding: 40px 24px 28px;
`;

const StyledMainLogo = styled(MainLogo)`
    width: 100%;
    max-width: 170px;
`;

const GuideImage = styled.img`
    width: 100%;
    max-width: 280px;
    margin: 20px 0;
`;