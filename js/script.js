// Função para adicionar marcadores de danos na imagem do carroceu
function setMarkerType(type) {
  const imageContainer = document.querySelector('.image-container');
  const carroceuImage = document.getElementById('carroceuImage');

  // Adiciona um evento de clique na imagem para posicionar o marcador
  carroceuImage.addEventListener('click', function (event) {
      // Obtém as coordenadas do clique em relação à imagem
      const rect = carroceuImage.getBoundingClientRect();
      const x = event.clientX - rect.left; // Posição X relativa à imagem
      const y = event.clientY - rect.top;  // Posição Y relativa à imagem

      // Cria o marcador
      const marker = document.createElement('div');
      marker.className = 'marker';
      marker.style.left = `${x}px`;
      marker.style.top = `${y}px`;
      marker.textContent = type; // Define o tipo de dano (X, O, A)

      // Adiciona um evento para remover o marcador ao clicar nele
      marker.addEventListener('click', function (e) {
          e.stopPropagation(); // Impede que o evento de clique na imagem seja acionado
          marker.remove(); // Remove o marcador
      });

      // Adiciona o marcador ao contêiner da imagem
      imageContainer.appendChild(marker);
  });
}

// Inicializa os controles ao carregar a página
document.addEventListener('DOMContentLoaded', initControls);



function updateFuelGauge(gaugeId, level) {
    const gauge = document.getElementById(gaugeId);
    gauge.className = 'fuel-gauge ' + level;
}
function nextPage() {
    window.location.href = 'devolucao.html';
}

function backPage() {
    window.location.href = 'index.html';
}
function assinar() {
    window.location.href = 'assinatura.html';
}
