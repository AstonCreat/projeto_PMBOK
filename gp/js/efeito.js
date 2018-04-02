$(document).ready(function() {
	
	$('#inicial_Modal').modal({backdrop: 'static', keyboard: false}) 
	$('#inicializar, #inicializar').sortable({
		connectWith: '#inicializar',
		change : (event, ui) => {
			ui.item[0].classList.remove('col-3');
			ui.item[0].classList.add('col-12', 'mt-2');
		}
	}).disableSelection();

	$('#planejamento, #planejamento').sortable({
		connectWith: '#planejamento',
		change : (event, ui) => {
			ui.item[0].classList.remove('col-3');
			ui.item[0].classList.add('col-4', 'mt-2');
		}
	}).disableSelection();

	$('#encerramento, #encerramento').sortable({
		connectWith: '#encerramento',
		change : (event, ui) => {
			ui.item[0].classList.remove('col-3');
			ui.item[0].classList.add('col-12', 'mt-2');
		}
	}).disableSelection();

	$('#execucao, #execucao').sortable({
		connectWith: '#execucao',
		change : (event, ui) => {
			ui.item[0].classList.remove('col-3');
			ui.item[0].classList.add('col-4', 'mt-2');
		}
	}).disableSelection();

		$('#controle, #controle').sortable({
		connectWith: '#controle',
		change : (event, ui) => {
			ui.item[0].classList.remove('col-3');
			ui.item[0].classList.add('col-3', 'mt-2');
		}
	}).disableSelection();

});

const reset = () => {
	window.location.href = 	window.location.href;
}