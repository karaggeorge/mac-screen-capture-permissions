const {app} = require('electron');
const {
	hasScreenCapturePermission,
	hasPromptedForPermission,
	openSystemPreferences
} = require('.');

(async () => {
	await app.whenReady();

	console.log('Has asked permissions?', hasPromptedForPermission());

	console.log('Has permissions?', hasScreenCapturePermission());
	console.log('Has asked permissions?', hasPromptedForPermission());

	openSystemPreferences();
})();
