const {app} = require('electron');
const {
	hasScreenCapturePermission,
	hasPromptedForPermission,
	resetPermissions
} = require('.');

(async () => {
	await app.whenReady();

	console.log('Has asked permissions?', hasPromptedForPermission());

	console.log('Has permissions?', hasScreenCapturePermission());
	console.log('Has asked permissions?', hasPromptedForPermission());

	console.log('Reset', resetPermissions());
	console.log('Has asked permissions?', hasPromptedForPermission());
})();
