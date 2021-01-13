module.exports = {
	name: 'Selectable Chat',
	author: 'Mixaz',
	locations: ['game'],
	run: () => {
		let newCSS = Object.assign(document.createElement('style'), {
			id: 'selectableChat',
			innerHTML: `#chatList * {
				user-select: text;
			}`
		})
		document.addEventListener('DOMContentLoaded', () => document.head.appendChild(newCSS))
	}
}