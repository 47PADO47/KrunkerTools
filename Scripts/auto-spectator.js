module.exports = {
	name: 'Auto Spectator',
	version: '1.0.0',
	author: 'Mixaz',
	description: 'Automatically enter spectator mode with a option to disable it.',
	locations: ['game'],
	settings: {
		autoSpect: {
			name: 'Auto Spectator Mode',
			id: 'autoSpect',
			cat: 'Gameplay',
			type: 'checkbox',
			val: true,
			html: function () { return window.clientUtil.genCSettingsHTML(this) },
			set: value => {
				let spectButtonInput = document.querySelector('#spectButton input')
				if (spectButtonInput && spectButtonInput.checked != value) { spectButtonInput.click() }
			}
		}
	}
}