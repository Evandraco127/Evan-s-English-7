$(init);

function init() {

    $('#element_1').data( 'number', 1 ).attr( 'id', 'card'+1 ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true} );
	  
	$('#element_2').data( 'number', 2 ).attr( 'id', 'card'+2 ).draggable( {containment: '#content', stack: '#cardPile div',cursor: 'move',revert: true } );
	
       $('#element_3').data( 'number', 3 ).attr( 'id', 'card'+3 ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true } );
	  
    $('#element_4').data( 'number', 4 ).attr( 'id', 'card'+4 ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true } );
	  
	  $('#element_5').data( 'number', 5 ).attr( 'id', 'card'+5 ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true } );
	  
	    $('#element_6').data( 'number', 6 ).attr( 'id', 'card'+6 ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true } );
	  	    $('#element_7').data( 'number', 7 ).attr( 'id', 'card'+7 ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true } );

  // Create the element slots
    $('#slot_1').data( 'number', 1 ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop} );
$('#slot_2').data( 'number', 2 ).droppable( { accept: '#cardPile div',hoverClass: 'hovered', drop: handleCardDrop  } );

        $('#slot_3').data( 'number', 3 ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop } );

$('#slot_4').data( 'number', 4 ).droppable( { accept: '#cardPile div',hoverClass: 'hovered', drop: handleCardDrop  } );
$('#slot_5').data( 'number', 5 ).droppable( { accept: '#cardPile div',hoverClass: 'hovered', drop: handleCardDrop  } );
$('#slot_6').data( 'number', 6 ).droppable( { accept: '#cardPile div',hoverClass: 'hovered', drop: handleCardDrop  } );
$('#slot_7').data( 'number', 7 ).droppable( { accept: '#cardPile div',hoverClass: 'hovered', drop: handleCardDrop  } );


function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  if ( slotNumber == cardNumber ) {
    /*ui.draggable.addClass( 'correct' );*/
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
  } 
}

}