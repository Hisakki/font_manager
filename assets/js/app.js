var Fonts = [
	{ name: 'Roboto' }, 
	{ name: 'Calibri' }, 
	{ name: 'Oxygen' }, 
	{ name: 'Arial' }
]
var Weights = [
	{ name: 'lighter' },
	{ name: 'normal' }, 
	{ name: 'bolder' }, 
	{ name: 'bold' }
]
var Colors = [
	{ name: '#3498db' },
	{ name: '#2ecc71' }, 
	{ name: '#8e44ad' }, 
	{ name: '#34495e' },
	{ name: '#e67e22' }, 
	{ name: '#e74c3c' }
]

var vm = new Vue({
	el: "#app",
	components: {},
	data: {
		text: 'Ab',

		fonts: Fonts,
		weights: Weights,
		colors: Colors,

		fontSelected: 'Roboto',
		weightSelected: 'normal',
		backgroundSelected: '#3498db',
		colorSelected: '#FFFFFF',

		range: 60,
		stateAddColor: false,
		colorAdded: ''
	},
	methods: {
		textChanged () {
			this.text = (this.text == '') ? 'Ab' : this.text
		},
		changedColor (color) {
			this.backgroundSelected = color
 		},
 		changeSize (range) {
 			this.range = range
 		},
 		showAddColor () {
 			this.stateAddColor = !this.stateAddColor
 		},
 		addingColor () {
 			if (this.colorAdded.match(/\b[0-9A-F]{6}\b/gi) !== null) {
 				this.colors.push( {name: this.colorAdded} )
 				this.colorAdded = ''
 				this.stateAddColor = false
 			}
 		},
 		colorInversion () {
 			color = this.colorSelected
 			
 			this.colorSelected = this.backgroundSelected
			this.backgroundSelected = color
 		}
	},
	computed: {},
	watch: {},
	directives: {
		focus: {
			inserted: function (el, value) {
			    // Focus the element
			    el.focus()
			}
		}
	}
});



 	
