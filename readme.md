# mac-screen-capture-permissions

> Check and request permission to capture the screen on macOS (introduced with 10.15 Catalina)

## Install

Building the module from source requires macOS 11+ SDK, but the resulting module will still run on <10.15, 10.15 and 11+.

```
$ npm install mac-screen-capture-permissions
```

## Usage

See [example.js](https://github.com/karaggeorge/mac-screen-capture-permissions/blob/master/example.js) for usage.

```js
const {
  hasScreenCapturePermission,
  hasPromptedForPermission
} = require('mac-screen-capture-permissions');

hasPromptedForPermission();

// false

hasScreenCapturePermission();

// false

hasPromptedForPermission();

// true


// After accepting the permissions

hasScreenCapturePermission();

// true
```

## API

#### `.hasScreenCapturePermission(): boolean`

Whether or not the current app has the required permissions to record the screen. If this is the first time attempting, a permissions dialog will be shown to the user. Any subsequent calls to `hasScreenCapturePermission` will just check for the permission but won't show a dialog. If the user denied the original request, you need to prompt them to enable the permissions in the System Preferences.

This can be reset by calling `resetPermissions`. The dialog will be shown again after that.

Returns `true` on macOS versions older than 10.15 since this permission wasn't present

#### `.hasPromptedForPermission(): boolean`

**Note:** Only works for Electron apps

Whether or not the permission dialog has been shown to the user. Will be `false` if you haven't called `hasScreenCapturePermission` for this app yet, and `true` otherwise.

This can be reset by calling `resetPermissions`,

Returns `false` on macOS versions older than 10.15 since this permission wasn't present

#### `.resetPermissions({bundleId?: string}): boolean`

Reset the `ScreenCapture` permissions. It will reset the permissions for **all** apps, so use with care. Provide a `bundleId` (i.e. com.apple.Terminal) to reset the permissions only for that app.

Calls `tccutil reset ScreenCapture [bundleId]`.

This will revoke access if it was previously granted, and it will trigger the permissions dialog the next time `hasScreenCapturePermission` is called.

Returns `true` if the command executed successfully and `false` otherwise.

Returns `false` on macOS versions older than 10.15 since this permission wasn't present

#### `.openSystemPreferences(): Promise<void>`

Open the System Preferences in the Screen Recording permissions section under the Security pane.

Only available in Electron apps.

Returns a Promise that resolves when the window is opened

## License

MIT
