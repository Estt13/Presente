const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const kuromi = document.getElementById('kuromi');
const fotoCapturada = document.getElementById('fotoCapturada');
const mensagem = document.getElementById('mensagem');
const naoBtn = document.getElementById('naoBtn');

function tirarFoto() {
  // Ativa a câmera sem mostrar a prévia
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;

      video.onloadedmetadata = () => {
        // Espera a câmera carregar e então captura automaticamente
        setTimeout(() => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d').drawImage(video, 0, 0);

          const dataURL = canvas.toDataURL('image/png');
          fotoCapturada.src = dataURL;
          fotoCapturada.hidden = false;

          kuromi.hidden = false;
          mensagem.hidden = false;

          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }, 1000); // 1 segundo de delay só pra garantir que carregou
      };
    })
    .catch((err) => {
      console.error('colabora com a brincadeira amor', err);
    });
}

// Função para fazer o botão "não" fugir
naoBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - naoBtn.offsetWidth;
  const maxY = window.innerHeight - naoBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  naoBtn.style.left = `${randomX}px`;
  naoBtn.style.top = `${randomY}px`;
});
