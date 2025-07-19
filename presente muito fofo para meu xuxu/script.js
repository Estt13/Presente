



const simButton = document.getElementById('simBtn' );
const naoButton = document.getElementById('naoBtn' );



    naoButton.addEventListener('mouseover',()=>{
        const newX = Math.random() * window.innerWidth
        const newY = Math.random() * window.innerHeight

        naoButton.style.left =`${newX}px`;
        naoButton.style.top=`${newY}px`;
    })

    const video =
    document.getElementById('video');
    const tirarFotoBtn=
    document.getElementById('tirando fotoBtn');
    const canvas =
    document.getElementById('canvas');
    const fotoFinal=
    document.getElementById('fotoFinal');
    let stream;

    async function iniciarCamera(){
        try{
            stream = await navigator.mediaDevices.getUserMedia({ video: true});
            video.srcObjec = stream;
            video.style.display = 'block';
            tirarFotoBtn.style.display = 'inline-block';
        } catch (err){
            alert('eii, n tenho certeza se vc quer mesmo... tenta dnv!!');
        }
    }

    tirarFotoBtn.addEventListener('click', ()=>{
        const context =
        canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageUrl =
            canvas.toDataURL('image/png');

            fotoFinal.innerHTML = `
            <h2>Obrigado por me fazer o homem mais feliz do mundo todos os dias</h2>
            <div id="kuromiFrame">
                <img class = "foto" src="$ {imageUrl}" />
                    <img class="kuromi" src="https://i.imgur.com/DA0oRlT;png" alt="kuromi segurando sua foto"/>
                    </div>
                    <p> Agora vc esta presa cimigo pra sempreS2S2</p>
                    `;

                    if (stream){

                    stream.getTracks().forEach(track => track.stop());
                    }

                    video.style.display = 'none';
                    tirarFotoBtn.style.display = 'none';
                
    })