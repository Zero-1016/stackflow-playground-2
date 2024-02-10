import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import Mbti1 from '@/app/screens/mbti/mbti-1';
import Mbti2 from '@/app/screens/mbti/mbti-2';
import Mbti3 from '@/app/screens/mbti/mbti-3';

export const { Stack: MbtiStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Mbti1,
    Mbti2,
    Mbti3,
  },
  plugins: [basicRendererPlugin()],
  initialActivity: () => 'Mbti1',
});
