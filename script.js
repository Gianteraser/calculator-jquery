
// div tags '<div></div>'
//create calculator display
$('body').append('<input type=text id=calculatorDisplay></input>');
//create calculator body
$('body').append('<div id=calculatorBody0 class=numkey></div>')
$('body').append('<div id=calculatorBodyr1 class=numkey></div>')
$('body').append('<div id=calculatorBodyr2 class=numkey></div>')
$('body').append('<div id=calculatorBodyr3 class=numkey></div>')
$('body').append('<div id=calculatorBodyr4 class=numkey></div>')
// //create button
// $('#calculatorBody').append('<input type="button"></input>')

// for(var i = 0; i < 10; i++){
// 	$('#calculatorBody').append('<input type="button" class="number" id=' + i + ' value="'+ i+'"></input>')

// }

var createNumbers = function(start, end, id){
	
	for(var i = start; i <= end; i++){

	$(id).append('<input type="button" class="number" id=' + i + ' value="'+ i+'"></input>')

	}


}

//instead of making each button individually or separating into groups/columns, make all the rows and assign them css
createNumbers(1, 4, '#calculatorBody0');
createNumbers(5, 8, '#calculatorBodyr1');
createNumbers(9, 12, '#calculatorBodyr2');
createNumbers(13, 16, '#calculatorBodyr3');
createNumbers(17, 19 , '#calculatorBodyr4');
var calcButtonsArr = ['AC','+/-','%','/', '7','8','9','x','4','5','6','-','1','2','3','+','0','.','='];
// $('#1').prop('value','AC'); scratch work

// display the numbers on the webpage
for(var i = 0; i < calcButtonsArr.length; i++){
	var calButtonID = "#"+(i+1) ;
	$(calButtonID).prop('value', calcButtonsArr[i]);

}
