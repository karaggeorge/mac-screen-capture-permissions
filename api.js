'use strict';
const electron = require('electron');

module.exports = typeof electron === 'string' ? null : new Proxy(electron, {
	get: (target, property) => target[property] || (target.remote ? target.remote[property] : undefined)
});
