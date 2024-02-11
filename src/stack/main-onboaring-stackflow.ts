import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import MainOnboarding from '@/app/screens/main-onboarding';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

export const { Stack: MainOnboardingStack, useFlow } = stackflow({
    transitionDuration: 350,
    activities: {
        MainOnboarding,
    },
    plugins: [basicRendererPlugin(), basicUIPlugin({ theme: 'cupertino' })],
    initialActivity: () => 'MainOnboarding',
});
