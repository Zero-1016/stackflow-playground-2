import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import Profile from '@/app/screens/profile';

export const { Stack: ProfileStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Profile,
  },
  plugins: [basicRendererPlugin()],
  initialActivity: () => 'Profile',
});
