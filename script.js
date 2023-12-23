document.querySelectorAll('.expandButton').forEach(function(button) {
  button.addEventListener('click', function() {
    var image = this.querySelector('.button-image');
    this.classList.toggle('expanded');
    image.classList.toggle('expanded-image');
    var link = this.querySelector('a');
    if (!link && this.classList.contains('expanded')) {
      link = document.createElement('a');
      link.href = 'seu-link-aqui';
      link.appendChild(image.cloneNode(true));
      this.innerHTML = '';
      this.appendChild(link);
    } else if (link && !this.classList.contains('expanded')) {
      this.innerHTML = '';
      this.appendChild(image);
    }
  });
});
document.getElementById("Botao1").addEventListener("click", function() {
  document.getElementById("pagina2").style.display = "block";
  document.getElementById("pagina1").style.display = "none";
});
document.getElementById("Botao2").addEventListener("click", function() {
  document.getElementById("pagina2").style.display = "block";
  document.getElementById("pagina3").style.display = "none";
});
document.getElementById("Botao3").addEventListener("click", function() {
  document.getElementById("pagina2").style.display = "block";
  document.getElementById("pagina4").style.display = "none";
});
document.getElementById("Botao4").addEventListener("click", function() {
  document.getElementById("pagina2").style.display = "block";
  document.getElementById("pagina6").style.display = "none";
});
document.getElementById("Opção1").addEventListener("click", function() {
  document.getElementById("pagina3").style.display = "block";
  document.getElementById("pagina2").style.display = "none";
});
document.getElementById("Opção2").addEventListener("click", function() {
  document.getElementById("pagina4").style.display = "block";
  document.getElementById("pagina2").style.display = "none";
});
document.getElementById("Opção4").addEventListener("click", function() {
  document.getElementById("pagina6").style.display = "block";
  document.getElementById("pagina2").style.display = "none";
});
// Se os serviços são elementos com a classe .serviço-ativo
var serviços = document.querySelectorAll('.serviço-ativo');

function mostrarInfo(id) {
  const serviço = document.querySelector(`.${id}`);
  serviços.forEach(outroServiço => outroServiço.classList.remove('serviço-ativo'));
  serviço.classList.add('serviço-ativo');
}
</script>
<script>
var imagens1 = ["https://github.com/Goguenblouts/Barbearia-Corte-Arte/blob/main/pagina%204/1%20descri%C3%A7%C3%A3o/img%20barber-1.jpg?raw=true", "https://github.com/Goguenblouts/Barbearia-Corte-Arte/blob/main/pagina%204/1%20descri%C3%A7%C3%A3o/img%20barber-5.jpg?raw=true", "https://github.com/Goguenblouts/Barbearia-Corte-Arte/blob/main/pagina%204/1%20descri%C3%A7%C3%A3o/img%20barber-7.jpg?raw=true"];
var imagens2 = ["https://github.com/Goguenblouts/Barbearia-Corte-Arte/blob/main/pagina%204/2%20descri%C3%A7%C3%A3o/img%20barber-14.jpg?raw=true", "https://github.com/Goguenblouts/Barbearia-Corte-Arte/blob/main/pagina%204/2%20descri%C3%A7%C3%A3o/img%20barber-15.jpg?raw=true", "https://github.com/Goguenblouts/Barbearia-Corte-Arte/blob/main/pagina%204/2%20descri%C3%A7%C3%A3o/img%20barber-19.jpg?raw=true"];
var imagens3 = ["https://github.com/Goguenblouts/Barbearia-Corte-Arte/blob/main/pagina%204/3%20descri%C3%A7%C3%A3o/img%20barber-29.jpg?raw=true", "https://github.com/Goguenblouts/Barbearia-Corte-Arte/blob/main/pagina%204/3%20descri%C3%A7%C3%A3o/img%20barber-24.jpg?raw=true", "https://github.com/Goguenblouts/Barbearia-Corte-Arte/blob/main/pagina%204/3%20descri%C3%A7%C3%A3o/img%20barber-27.jpg?raw=true"];
var indiceAtual1 = 0;
var indiceAtual2 = 0;
var indiceAtual3 = 0;
var imagemAtual = document.getElementById("imagemAtual");
var imagemAtual2 = document.getElementById("imagemAtual2");
var imagemAtual3 = document.getElementById("imagemAtual3");

function mudarImagem() {
  imagemAtual.src = imagens1[indiceAtual1];
  imagemAtual2.src = imagens2[indiceAtual2];
  imagemAtual3.src = imagens3[indiceAtual3];
  indiceAtual1 = (indiceAtual1 + 1) % imagens1.length;
  indiceAtual2 = (indiceAtual2 + 1) % imagens2.length;
  indiceAtual3 = (indiceAtual3 + 1) % imagens3.length;
}
// Configuração para mudar automaticamente a cada 5 segundos (5000 milissegundos)
setInterval(mudarImagem, 5000);