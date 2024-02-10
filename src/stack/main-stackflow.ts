import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import Main from '@/app/screens/main';

export const { Stack: MainStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Main,
  },
  plugins: [basicRendererPlugin()],
  initialActivity: () => 'Main',
});
