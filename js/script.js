function increment() {
	var progress_value = parseInt(document.getElementById('progress').getAttribute('aria-valuenow'));
	var progress_max = parseInt(document.getElementById('progress').getAttribute('aria-valuemax'));
	if (progress_value < progress_max) {
		document.getElementById('progress').style.width = progress_value + 10 + '%';
		document.getElementById('progress').setAttribute('aria-valuenow', progress_value + 10);
		document.getElementById('progress').innerText = progress_value + 10 + '%';
		document.getElementById('rest-times').innerText = parseInt(document.getElementById('rest-times').innerText) - 1;
	}
	else {
		alert('Поздравялю! Всё работает');
	}
}