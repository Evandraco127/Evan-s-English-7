// JavaScript Document


$(init);

function init() {


	

    $('#Drag1').data( 'number', 1 ).attr( 'id', 'card'+1 ).draggable( {
      containment: '#content',
      stack: '#pictures div',
      cursor: 'move',
      revert: true
    } );

    

        $('#Drag2').data( 'number', 2 ).attr( 'id', 'card'+2 ).draggable( {
      containment: '#content',
      stack: '#pictures div',
      cursor: 'move',
      revert: true
    } );

   

        $('#Drag3').data( 'number', 3 ).attr( 'id', 'card'+3).draggable( {
      containment: '#content',
      stack: '#pictures div',
      cursor: 'move',
      revert: true
    } );

   

        $('#Drag4').data( 'number', 4 ).attr( 'id', 'card'+4 ).draggable( {
      containment: '#content',
      stack: '#pictures div',
      cursor: 'move',
      revert: true
    } );

        $('#Drag5').data( 'number', 5 ).attr( 'id', 'card'+5 ).draggable( {
      containment: '#content',
      stack: '#pictures div',
      cursor: 'move',
      revert: true
    } );
	
	

	
	  $('#Drag6').data( 'number', 6 ).attr( 'id', 'card'+6 ).draggable( {
      containment: '#content',
      stack: '#pictures div',
      cursor: 'move',
      revert: true
    } );
	
	
	  $('#Drag7').data( 'number', 7).attr( 'id', 'card'+7 ).draggable( {
      containment: '#content',
      stack: '#pictures div',
      cursor: 'move',
      revert: true
    } );


  $('#Drag8').data( 'number', 8).attr( 'id', 'card'+8 ).draggable( {
      containment: '#content',
      stack: '#pictures div',
      cursor: 'move',
      revert: true
    } );


  // Create the element slots

    $('#Drop1').data( 'number', 1 ).droppable( {
      accept: '#pictures div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );

 

        $('#Drop2').data( 'number', 2 ).droppable( {
      accept: '#pictures div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );

  

        $('#Drop3').data( 'number', 3 ).droppable( {
      accept: '#pictures div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );



        $('#Drop4').data( 'number', 4 ).droppable( {
      accept: '#pictures div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );

        $('#Drop5').data( 'number', 5).droppable( {
      accept: '#pictures div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
	

  
      $('#Drop6').data( 'number', 6).droppable( {
      accept: '#pictures div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );

 

        $('#Drop7').data( 'number', 7 ).droppable( {
      accept: '#pictures div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );

  
   $('#Drop8').data( 'number', 8 ).droppable( {
      accept: '#pictures div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );

  

}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  if ( slotNumber == cardNumber ) {
   /*ui.draggable.addClass( 'correct' );*/
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
    ui.draggable.draggable( 'option', 'revert', false );
  } 
}