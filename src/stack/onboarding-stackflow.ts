import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import Onboarding1 from '@/app/screens/onboarding/onboarding-1';
import Onboarding2 from '@/app/screens/onboarding/onboarding-2';
import Onboarding3 from '@/app/screens/onboarding/onboarding-3';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

export const { Stack: OnboardingStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Onboarding1,
    Onboarding2,
    Onboarding3,
  },
  plugins: [basicRendererPlugin(), basicUIPlugin({ theme: 'cupertino' })],
  initialActivity: () => 'Onboarding1',
});
