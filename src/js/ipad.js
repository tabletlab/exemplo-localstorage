if(!window['Anuncio']) { var Anuncio = {}; }
;(function($) {
	Anuncio.iPad = {
		init: function() {

			$("#btnGrava").click(function() {
				localStorage.setItem("anuncio_a", $("#txt").val());
			});

			$("#btnResgata").click(function() {
				var AnuncioA = localStorage.getItem("anuncio_a");
				$("#divResgatados").append("<p>" + AnuncioA + "</p>");
			});
		}
	}
})(jQuery);