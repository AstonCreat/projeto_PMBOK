$(document).ready(function() {
	
	$('#inicial_Modal').modal({backdrop: 'static', keyboard: false}) 


	// $("drag41").draggable({containment:'document', revert:true});

	$("#drag41").draggable({revert:'true'});
	$("#drop_ini").droppable({accept:'#drag41'});
});