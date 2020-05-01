import { WebPlugin } from '@capacitor/core';
import { ImmersiveModePluginPlugin } from './definitions';

export class ImmersiveModePluginWeb extends WebPlugin implements ImmersiveModePluginPlugin {
  constructor() {
    super({
      name: 'ImmersiveModePlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const ImmersiveModePlugin = new ImmersiveModePluginWeb();

export { ImmersiveModePlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ImmersiveModePlugin);
