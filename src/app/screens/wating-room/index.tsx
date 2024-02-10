import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlowMachine } from '@/store/stack.store';

const WaitngRoom: ActivityComponentType = ({ params }) => {
  const { changeMain, changeSelect } = useFlowMachine();
  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={changeSelect}>게임 진행</button>
        <button onClick={changeMain}>나가기</button>
      </div>
    </AppScreen>
  );
};

export default WaitngRoom;
