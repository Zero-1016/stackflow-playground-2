import { create } from 'zustand';

type State = {
  loading: boolean;
  isFirstVisit: boolean;
  isProfile: boolean;
  flow:
    | 'SPLASH'
    | 'ONBOARDING'
    | 'PROFILE'
    | 'MAIN_ONBOARDING'
    | 'SELECT'
    | 'MAIN'
    | 'MBTI'
    | 'SMALLTALK'
    | 'WAITING';
  changeOnboarding: () => void;
  changeProfile: () => void;
  changeMainOnboarding: () => void;
  changeMain: () => void;
  changeSelect: () => void;
  changeSMALLTALK: () => void;
  changeMBTI: () => void;
  changeWaitng: () => void;
};

export const useFlowMachine = create<State>((set) => ({
  loading: true,
  isFirstVisit: true,
  isProfile: false,
  flow: 'SPLASH',
  changeOnboarding: () =>
    set(() => ({ flow: 'ONBOARDING', isFirstVisit: true, isProfile: false, loading: false })),
  changeProfile: () =>
    set(() => ({ flow: 'PROFILE', isFirstVisit: false, isProfile: true, loading: false })),
  changeMainOnboarding: () =>
    set(() => ({ flow: 'MAIN_ONBOARDING', isFirstVisit: false, isProfile: true, loading: false })),
  changeMain: () =>
    set(() => ({ flow: 'MAIN', isFirstVisit: false, isProfile: true, loading: false })),
  changeSelect: () =>
    set(() => ({ flow: 'SELECT', isFirstVisit: false, isProfile: true, loading: false })),
  changeMBTI: () =>
    set(() => ({ flow: 'MBTI', isFirstVisit: false, isProfile: true, loading: false })),
  changeSMALLTALK: () =>
    set(() => ({ flow: 'SMALLTALK', isFirstVisit: false, isProfile: true, loading: false })),
  changeWaitng: () =>
    set(() => ({ flow: 'WAITING', isFirstVisit: false, isProfile: true, loading: false })),
}));
