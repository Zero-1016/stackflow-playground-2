import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlowMachine } from '@/store/stack.store';

const Profile: ActivityComponentType = ({ params }) => {
  const { changeMain, changeMainOnboarding } = useFlowMachine();

  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen">
        <button onClick={changeMain}>프로필 설정 완료</button>
        <button onClick={changeMainOnboarding}>메인 화면 소개 온보딩 보기</button>
      </div>
    </AppScreen>
  );
};

export default Profile;
