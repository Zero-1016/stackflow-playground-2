import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlowMachine } from '@/store/stack.store';

const Mbti3: ActivityComponentType = ({ params }) => {
  const { changeMain, changeWaitng } = useFlowMachine();

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={changeMain}>메인화면으로</button>
        <button onClick={changeWaitng}>준비화면으로</button>
      </div>
    </AppScreen>
  );
};

export default Mbti3;
