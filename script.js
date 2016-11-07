	var $red = '<div class="color-cube red"></div>';
	var $green = '<div class="color-cube green"></div>';
	var $yellow = '<div class="color-cube yellow"></div>';
	var $blue = '<div class="color-cube blue"></div>';
	var totalRed = 0;
	var totalYellow = 0;
	var totalGreen = 0;
	var totalBlue = 0;

	function boxMaker($obj) {
		var buttonColor = $obj.attr('data-color');
		switch (buttonColor) {
		case 'red':
			totalRed++;
			$('#red').empty();
			$('#red').text('Total red: ' + totalRed);
			$('.container')
				.append($red);
			break;
		case 'yellow':
			totalYellow++;
			$('#yellow').empty();
			$('#yellow').text('Total yellow: ' + totalYellow);
			$('.container')
				.append($yellow);
			break;
		case 'green':
			totalGreen++;
			$('#green').empty();
			$('#green').text('Total green: ' + totalGreen);
			$('.container')
				.append($green);
			break;
		case 'blue':
			totalBlue++;
			$('#blue').empty();
			$('#blue').text('Total blue: ' + totalBlue);
			$('.container')
				.append($blue);
			break;
		};
	}
	$(document).ready(function () {
		$('.color-button').on('click', function () {
			boxMaker($(this));
		})
	})
