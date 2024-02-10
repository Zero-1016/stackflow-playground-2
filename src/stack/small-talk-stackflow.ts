import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import SmallTalk1 from '@/app/screens/small-talk/smalltalk-1';
import SmallTalk2 from '@/app/screens/small-talk/smalltalk-2';
import SmallTalk3 from '@/app/screens/small-talk/smalltalk-3';

export const { Stack: SmallTalkStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    SmallTalk1,
    SmallTalk2,
    SmallTalk3,
  },
  plugins: [basicRendererPlugin()],
  initialActivity: () => 'SmallTalk1',
});
