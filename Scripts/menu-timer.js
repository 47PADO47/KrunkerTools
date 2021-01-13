let timerVal, timerObserver

document.addEventListener('DOMContentLoaded', () => {
	document.head.appendChild(Object.assign(document.createElement('style'), {
		innerText: `#uiBase.onMenu #idkrMenuTimer {
		align-items: center;
		position: absolute;
		top: calc(50% + 60px);
		left: 50%;
		transform: translateX(-50%);
		color: rgba(255,255,255,.5);
		font-size: 32px
	}`}))

	timerVal = document.getElementById('timerVal')
	if (timerVal) {
		const menuTimer = Object.assign(document.createElement('span'), { id: 'idkrMenuTimer' })
		document.getElementById('menuHider')?.appendChild(menuTimer)

		timerObserver = new MutationObserver(() => menuTimer.innerText = timerVal.innerText)
	}
})

module.exports = {
	name: 'Menu Timer',
	version: '1.3.0',
	author: 'Mixaz',
	description: 'Adds an option to toggle timer in the menu.',
	locations: ['game'],
	settings: {
		menuTimer: {
			name: 'Show Menu Timer',
			id: 'menuTimer',
			cat: 'Interface',
			type: 'checkbox',
			val: true,
			html: function () { return window.clientUtil.genCSettingsHTML(this) },
			set: value => {
				let menuTimer = document.getElementById('idkrMenuTimer')
				if (menuTimer) { menuTimer.style.display = value ? 'flex' : 'none' }
				if (value) { timerObserver.observe(timerVal, { childList: true }) }
				else { timerObserver.disconnect() }
			}
		}
	}
}