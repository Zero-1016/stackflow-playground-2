import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import Splash from '@/app/screens/splash';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

export const { Stack: SplashStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Splash,
  },
  plugins: [basicRendererPlugin(), basicUIPlugin({ theme: 'cupertino' })],
  initialActivity: () => 'Splash',
});
