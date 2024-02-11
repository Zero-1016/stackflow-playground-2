import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import Main from '@/app/screens/main';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

export const { Stack: MainStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Main,
  },
  plugins: [basicRendererPlugin(), basicUIPlugin({ theme: 'cupertino' })],
  initialActivity: () => 'Main',
});
