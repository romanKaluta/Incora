var inputForCode = myform.cardcode,
    events  = ['input', 'change', 'blur', 'keyup'];
for (var i in events) {
    inputForCode.addEventListener(events[i], formatCardCode, false);
}
function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}

var cardMonth = myform.cardmonth;
var cardYear = myform.cardyear;
var cardCVV = myform.cardcvv;
cardMonth.addEventListener('keypress', function(event) {
	console.log(event)
	var code = event.keyCode
	if (code <= 57) {
		event.preventDefault() = null
	} 
})
cardYear.addEventListener('keypress', function(event) {
	var code =event.keyCode;
	if (code>=58) {
		event.preventDefault() = null;
	} 
})
cardCVV.addEventListener('keypress', function(event) {
	var code =event.keyCode;
	if (code>=57) {
		event.preventDefault() = null;
	} 
})

function pops() {
	if (inputForCode.value.length == 19) {
		if (inputForCode.classList.contains('input_wrong')) {
			inputForCode.classList.remove('input_wrong')
		}
	} else {
		inputForCode.classList.add('input_wrong')
	}
	var arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	if (arr.indexOf(cardMonth.value) > -1) {
		if (cardMonth.classList.contains('input_wrong')) {
			cardMonth.classList.remove('input_wrong')
		}
	} else {
		cardMonth.classList.add("input_wrong")
	}
	if (cardYear.value == 2017 || cardYear.value == 2018 || cardYear.value == 2019) {
		if (cardYear.classList.contains('input_wrong')) {
			cardYear.classList.remove('input_wrong')
		}
	} else {
		cardYear.classList.add("input_wrong")
	} 	
	if (cardCVV.value.length == 3) {
		if (cardCVV.classList.contains('input_wrong')) {
			cardCVV.classList.remove('input_wrong')
		}
	} else {
		cardCVV.classList.add('input_wrong')
	}
}