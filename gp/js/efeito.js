$(document).ready(function() {
	
	$('#inicial_Modal').modal({backdrop: 'static', keyboard: false}) 


	// $("drag41").draggable({containment:'document', revert:true});

	// $("#drag41").draggable({revert:'true'});
	$("#item, #item").sortable({
		connectWith:'.card-body',
		revert:true
		// stop: function(event,ui){
		 	// $(".vermelho").css('card-body border border-verde col-12 d-flex justify-content-center ui-sortable-handle mt-2');
		// }
	}).disableSelection();
});