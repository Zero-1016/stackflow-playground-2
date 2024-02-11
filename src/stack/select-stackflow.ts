import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import SelectGame from '@/app/screens/select-game/selectgame';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

export const { Stack: MainStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    SelectGame,
  },
  plugins: [basicRendererPlugin(), basicUIPlugin({ theme: 'cupertino' })],
  initialActivity: () => 'SelectGame',
});
