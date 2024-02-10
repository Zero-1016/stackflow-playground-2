import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import MainOnboarding from '@/app/screens/main-onboarding';

export const { Stack: MainOnboardingStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    MainOnboarding,
  },
  plugins: [basicRendererPlugin()],
  initialActivity: () => 'MainOnboarding',
});
