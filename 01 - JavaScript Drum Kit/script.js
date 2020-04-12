function playSound(e) {
	// console.log(e.keyCode);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	// console.log(audio);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) return; //stops the function running
	audio.currentTime = 0; //rewind to the start
	audio.play();
	// this.console.log(key);

	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);