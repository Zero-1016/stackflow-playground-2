import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import SelectGame from '@/app/screens/select-game/selectgame';

export const { Stack: SelectStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    SelectGame,
  },
  plugins: [basicRendererPlugin()],
  initialActivity: () => 'SelectGame',
});
