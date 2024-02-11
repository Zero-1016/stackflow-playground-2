import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/stack/mbti-stackflow';

const Mbti1: ActivityComponentType = ({ params }) => {
  const { push } = useFlow();

  const onClick = () => {
    push('Mbti2', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen">
        <button onClick={onClick}>mbti 내꺼 선택하기</button>
      </div>
    </AppScreen>
  );
};

export default Mbti1;
