new Vue({
			el: '#app',
			data: {
				playerHealth: 100,
				monsterHealth:100,
				gameIsRunning: false
			},
			methods: {
				changeGreeting: function(event) {
					this.greeting = event.target.value;
				}
			}
		});
