import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/stack/mbti-stackflow';

const Mbti2: ActivityComponentType = ({ params }) => {
  const { push } = useFlow();

  const onClick = () => {
    push('Mbti3', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={onClick}>다른 사람 대기하기</button>
      </div>
    </AppScreen>
  );
};

export default Mbti2;
