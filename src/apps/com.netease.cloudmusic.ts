import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐测试',
  groups: [
    {
      key: 99,
      name: '底部免费听横幅',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.activity.MainActivity',
          matches:
            'ImageView[id="com.netease.cloudmusic:id/closeIV"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
