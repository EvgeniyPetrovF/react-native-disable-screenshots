const DisableScreenshots = require('./NativeDisableScreenshots').default;

export function setSecureStatus(flag: boolean): void {
  return DisableScreenshots.setSecureStatus(flag);
}
