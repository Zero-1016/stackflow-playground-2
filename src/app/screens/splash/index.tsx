import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlowMachine } from '@/store/stack.store';

const Splash: ActivityComponentType = ({ params }) => {
  const { changeProfile, changeOnboarding } = useFlowMachine();

  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen">
        <button onClick={changeProfile}>profile</button>
        <button onClick={changeOnboarding}>onboarding</button>
      </div>
    </AppScreen>
  );
};

export default Splash;
