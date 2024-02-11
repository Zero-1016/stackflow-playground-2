import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlowMachine } from '@/store/stack.store';

const SelectGame: ActivityComponentType = ({ params }) => {
  const { changeMBTI, changeSMALLTALK } = useFlowMachine();
  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen">
        <button onClick={changeMBTI}>mbti 진행하기</button>
        <button onClick={changeSMALLTALK}>small-talk 진행하기</button>
      </div>
    </AppScreen>
  );
};

export default SelectGame;
