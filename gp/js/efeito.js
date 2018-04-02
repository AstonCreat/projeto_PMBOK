$(document).ready(function() {
	
	$('#inicial_Modal').modal({backdrop: 'static', keyboard: false}) 
	$('#item, #item').sortable({
		connectWith: '.card-body',
		revert: true ,
		change : (event, ui) => {
			ui.item[0].classList.remove('col-3');
			ui.item[0].classList.add('col-12', 'mt-2');
		}
	}).disableSelection();
});