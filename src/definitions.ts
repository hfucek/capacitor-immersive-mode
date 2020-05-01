declare module "@capacitor/core" {
  interface PluginRegistry {
    ImmersiveModePlugin: ImmersiveModePluginPlugin;
  }
}

export interface ImmersiveModePluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
