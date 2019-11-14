/// <reference lib="dom"/>
/// <reference types="electron"/>
/// <reference types="node"/>
import {openSystemPreferences as electronUtilOpenSystemPreferences} from 'electron-util';

/**
Check whether or not the current app has the required permissions to record the screen

@example
```
const hasPermissions = hasScreenCapturePermission(); // true
```
*/
export const hasScreenCapturePermission: () => boolean;

/**
Check whether or not the current app has already asked for permissions before.

Only works in Electron apps. Otherwise returns `false`.

@example
```
const hasAsked = hasPromptedForPermission(); // true
```
*/
export const hasPromptedForPermission: () => boolean;

/**
Resets ScreenCapture permissions for all applications.

Optionally pass in an object with `bundleId` to only reset permissions for that app

@example
```
resetPermissions({bundleId: 'com.googlecode.iterm2'}); // true
```

@returns A boolean that is true if the permissions were reset successfully and false otherwise
*/
export const resetPermissions: (options?: {bundleId?: string}) => boolean;

/**
Open the System Preferences in the Screen Recording permissions section under the Security pane.

Only available in Electron apps.

@example
```
openSystemPreferences().then(() => console.log('Opened'));
```

@returns A Promise that resolves when the window is open
*/
export const openSystemPreferences: () =>  ReturnType<typeof electronUtilOpenSystemPreferences>;