const cssHideAds = Object.assign(document.createElement('style'), {
	id: 'hideAds',
	innerHTML: `#aHolder, .endAHolder {
		display: none !important;
	}`
}),
	cssHideAdsFreeKR = Object.assign(document.createElement('style'), {
		id: 'hideAdsFreeKR',
		innerHTML: `#pre-content-container {
			display: none !important;
		}`
	})

module.exports = {
	name: 'Hide Ads',
	version: '1.3.0',
	author: 'Mixaz',
	description: 'Adds options to hide ads.',
	locations: ['game', 'social'],
	settings: {
		hideAds: {
			name: 'Hide Ads',
			id: 'hideAds',
			cat: 'Interface',
			type: 'checkbox',
			val: true,
			html: function () { return clientUtil.genCSettingsHTML(this) },
			set: value => {
				if (value) document.head.appendChild(cssHideAds)
				else if (cssHideAds.parentElement) cssHideAds.remove()
			}
		},
		hideAdsFreeKR: {
			name: 'Hide Free KR Ads',
			id: 'hideAdsFreeKR',
			cat: 'Interface',
			type: 'checkbox',
			val: true,
			html: function () { return clientUtil.genCSettingsHTML(this) },
			set: value => {
				if (value) document.head.appendChild(cssHideAdsFreeKR)
				else if (cssHideAdsFreeKR.parentElement) cssHideAdsFreeKR.remove()
			}
		}
	},
	run: config => {
		if (config.get('hideAds', true)) {
			document.addEventListener('DOMContentLoaded', () => document.head.appendChild(cssHideAds))
		}
	}
}