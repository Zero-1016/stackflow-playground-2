import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlowMachine } from '@/store/stack.store';
import { useFlow } from '@/stack/onboarding-stackflow';

const Onboarding3: ActivityComponentType = ({ params }) => {
  const { changeProfile } = useFlowMachine();
  const { push } = useFlow();

  const onBack = () => {
    push('Onboarding2', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen">
        <button onClick={changeProfile}>프로필 설정하러 가기</button>
        <button onClick={onBack}>이전 화면으로</button>
        <button onClick={changeProfile}>스킵하기</button>
      </div>
    </AppScreen>
  );
};

export default Onboarding3;
