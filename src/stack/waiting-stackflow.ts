import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import WaitngRoom from '@/app/screens/wating-room';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
export const { Stack: WaitingStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    WaitngRoom,
  },
  plugins: [basicRendererPlugin(), basicUIPlugin({ theme: 'cupertino' })],
  initialActivity: () => 'WaitngRoom',
});
