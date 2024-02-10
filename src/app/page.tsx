'use client';

import { MainStack } from '@/stack/main-stackflow';
import { OnboardingStack } from '@/stack/onboarding-stackflow';
import { ProfileStack } from '@/stack/profile-stackflow';
import { SplashStack } from '@/stack/splash-stackflow';
import { useFlowMachine } from '@/store/stack.store';
import { MainOnboardingStack } from '@/stack/main-onboaring-stackflow';
import { SelectStack } from '@/stack/game-select-stackflow';
import { SmallTalkStack } from '@/stack/small-talk-stackflow';
import { MbtiStack } from '@/stack/mbti-stackflow';
import { useEffect } from 'react';
import { WaitingStack } from '@/stack/waiting-stackflow';

export default function Home() {
  const { flow, changeOnboarding, isFirstVisit } = useFlowMachine();

  useEffect(() => {
    if (!isFirstVisit) return;

    setTimeout(() => {
      changeOnboarding();
    }, 1500);
  }, [changeOnboarding, isFirstVisit]);

  return (
    <main>
      {flow === 'SPLASH' && <SplashStack />}
      {flow === 'ONBOARDING' && <OnboardingStack />}
      {flow === 'PROFILE' && <ProfileStack />}
      {flow === 'MAIN' && <MainStack />}
      {flow === 'MAIN_ONBOARDING' && <MainOnboardingStack />}
      {flow === 'SELECT' && <SelectStack />}
      {flow === 'WAITING' && <WaitingStack />}
      {flow === 'SMALLTALK' && <SmallTalkStack />}
      {flow === 'MBTI' && <MbtiStack />}
    </main>
  );
}
