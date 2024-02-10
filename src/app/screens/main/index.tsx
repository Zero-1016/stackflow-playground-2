import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlowMachine } from '@/store/stack.store';

const Main: ActivityComponentType = ({ params }) => {
  const { changeWaitng, changeProfile } = useFlowMachine();

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={changeWaitng}>게임하러 가기</button>
        <button onClick={changeProfile}>프로필 설정 돌아가기</button>
      </div>
    </AppScreen>
  );
};

export default Main;
