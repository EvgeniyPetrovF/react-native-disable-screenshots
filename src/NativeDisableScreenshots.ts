import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setSecureStatus(flag: boolean): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('DisableScreenshots');
