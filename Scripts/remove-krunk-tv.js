module.exports = {
	name: 'Remove Krunk TV',
	author: 'Mixaz',
	locations: ['social'],
	run: () => {
		document.addEventListener('DOMContentLoaded', () => { 
			let leftYTBox = document.getElementById('leftYTBox')
			leftYTBox.style.display = 'none'
			Array.from(leftYTBox.getElementsByTagName('iframe')).forEach(iframe => {
				iframe.src = ''
			})
		})
	}
}