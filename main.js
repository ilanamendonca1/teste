"use strict";
$( document ).ready(function() {
    // create the slideshow object 
    var slideshow = createSlideshow();
    
    var slides = [
        {href:"barra-sa.jpg", title:"Farol da Barra - Salvador / Bahia"}, 
        {href:"guaruja-sp.jpg", title:"Guaruja - Sao Paulo"},
        {href:"jericoacoara-fo.jpg", title:"Jericoacoara - Fortaleza"},
        {href:"lencois-ma-.jpg", title:"Lencois Maranhenses - Maranhao"},
        {href:"pontanegra-na.jpg", title:"Ponta Negra - Natal"},  
        {href:"pontaverde-mc.jpg", title:"Ponta Verde - Maceio"},  
        {href:"portodegalinhas-pe.jpg", title:"Porto de Galinhas - Pernambuco"},
        {href:"rio-rj.jpg", title:"Cristo Redentor - Rio de Janeiro"}    		
    ];
    
    $("#play_pause").click( slideshow.createToggleHandler() );  
    
    slideshow.loadImages(slides).startSlideShow( $("#image"), $("#caption") );
	
	
});