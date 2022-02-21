function api() {
  let artigo = $(".api")
  let data = $("#date").val();
  let titulo = $(".api-titulo");
  let descricao = $(".api-texto");
  let imagem = $(".api-imagem");
  let video = $(".api-video");

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=fPYCd2Epp6jDc2uLnSnZfG1RM9Ed4q4W2YpCbxaz&date=${data}`,

    success: function (search) {
      artigo.css("visibility", "visible");
      titulo.text(search.title);
      descricao.text(search.explanation);

      if (search.media_type == "image") {
        imagem.attr("src", search.url);
        imagem.css("display", "block");
        video.css("display", "none");
      } else {
        video.attr("src", search.url);
        imagem.css("display", "none");
        video.css("display", "block");
      }
      return search;
    },
  });
}

$(".botao-pesquisar").on("click", function (event) {
  event.preventDefault();
  api();
});
