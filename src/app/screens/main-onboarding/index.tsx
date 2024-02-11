import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlowMachine } from '@/store/stack.store';

const MainOnboarding: ActivityComponentType = ({ params }) => {
  const { changeMain } = useFlowMachine();
  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen">
        <button onClick={changeMain}>메인화면으로</button>
      </div>
    </AppScreen>
  );
};

export default MainOnboarding;
