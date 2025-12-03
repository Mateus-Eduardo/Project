function mostrarEtapa1(){
    document.getElementById("cardInicial").style.display="none";
    document.getElementById("etapa1").style.display="block";
    const audio = document.getElementById("music");
    audio.currentTime = 41; // começa em 0:43 da música
    audio.play();
}

function mostrarEtapa2(){
    document.getElementById("etapa1").style.display="none";
    document.getElementById("etapa2").style.display="block";
}

function mostrarEtapa3(){
    document.getElementById("etapa2").style.display="none";
    document.getElementById("etapa3").style.display="block";
}

function mostrarMensagemFinal() {
    document.getElementById("etapa3").style.display = "none";
    document.getElementById("final").style.display = "block";

    const texto = `
        Você é uma garota forte, incrível, decidida e que eu admiro muito e estou gostando de conhecer um pouco a cada dia que passa mesmo voce sendo tranqueira. Obrigado por me permitir te conhecer cada dia mais. <br>
        Saiba que mesmo que por pouco tempo que nos conhecemos, eu entendo seu tempo. Porém quero que saiba: 
        eu estou do seu lado hoje e sempre para compartilharmos dias ruins e dias felizes. <br>
        Se eu tiver a oportunidade de deixar seu dia nem que seja 1% mais feliz, eu estou disposto. ❤️<br><br>
        <strong>Curiosidades sobre ela</strong><br><br>
    `;

    const interacoes = `
        <button onclick="perguntar('Idade: 23 ❤️')">Qual a sua idade?</button><br>
        <button onclick="perguntar('Uma das mais lindas que existem, afinal tudo que é feito com amor e dedicação se torna lindo e ela é uma bela Enfermeira 💉❤️')">Qual sua profissão?</button><br>
        <button onclick="perguntar('Ama aproveitar a Vida ✨')">Uma qualidade dela?</button><br>
        <button onclick="perguntar('Defeito: estar longe de mim 😢❤️')">um defeito?</button><br>
        <button onclick="perguntar('Encheria de beijos e um abraço dando a maior segurança que mesmo ela podendo lidar com as coisas espero um dia ser sua base para confiar e se sentir segura.❤️')">O que eu gostaria de fazer com ela agora?</button>
    `;

    document.getElementById("mensagem").style.display="block";
    document.getElementById("mensagem").innerHTML = texto + interacoes;

}

function perguntar(pergunta){
    alert(pergunta);
}
