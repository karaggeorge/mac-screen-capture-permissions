'use strict';
const path = require('path');
const fs = require('fs');
const execa = require('execa');
const electronUtil = require('electron-util/node');
const macosVersion = require('macos-version');

const api = require('./api');

const binary = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'screen-capture-permissions');

const permissionExists = macosVersion.isGreaterThanOrEqualTo('10.15');

const filePath = api && path.join(api.app.getPath('userData'), '.has-app-requested-screen-capture-permissions');

const hasScreenCapturePermission = () => {
	if (!permissionExists) {
		return true;
	}

	const {stdout} = execa.sync(binary);
	const hasPermission = stdout === 'true';

	if (!hasPermission && filePath) {
		try {
			fs.writeFileSync(filePath, '');
		} catch (error) {
			if (error.code === 'ENOENT') {
				fs.mkdirSync(api.app.getPath('userData'));
				fs.writeFileSync(filePath, '');
			}

			throw error;
		}
	}

	return hasPermission;
};

const hasPromptedForPermission = () => {
	if (!permissionExists) {
		return false;
	}

	if (filePath && fs.existsSync(filePath)) {
		return true;
	}

	return false;
};

const resetPermissions = ({bundleId = ''} = {}) => {
	try {
		execa.sync('tccutil', ['reset', 'ScreenCapture', bundleId].filter(Boolean));

		if (filePath && fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
		}

		return true;
	} catch (error) {
		return false;
	}
};

module.exports = {
	hasScreenCapturePermission,
	hasPromptedForPermission,
	resetPermissions
};
