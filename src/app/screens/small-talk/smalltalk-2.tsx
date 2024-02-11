import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/stack/small-talk-stackflow';

const SmallTalk: ActivityComponentType = ({ params }) => {
  const { push } = useFlow();

  const onClick = () => {
    push('SmallTalk3', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen">
        <button onClick={onClick}>다른 사람 대기하기</button>
      </div>
    </AppScreen>
  );
};

export default SmallTalk;
