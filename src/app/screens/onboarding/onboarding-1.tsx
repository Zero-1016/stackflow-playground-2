import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/stack/onboarding-stackflow';
import { useFlowMachine } from '@/store/stack.store';

const Onboarding1: ActivityComponentType = ({ params }) => {
  const { push } = useFlow();

  const { changeProfile } = useFlowMachine();
  const onPush = () => {
    push('Onboarding2', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen">
        <button onClick={onPush}>온보딩 계속 보기</button>
        <button onClick={changeProfile}>스킵하기</button>
      </div>
    </AppScreen>
  );
};

export default Onboarding1;
