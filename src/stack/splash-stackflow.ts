import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import Splash from '@/app/screens/splash';

export const { Stack: SplashStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Splash,
  },
  plugins: [basicRendererPlugin()],
  initialActivity: () => 'Splash',
});
