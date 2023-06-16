function adicionarLinha() {

    var divInformacoes = document.getElementById('informacoes');
    var novaLinha = document.createElement('div');
    novaLinha.classList.add('form-row');
    novaLinha.innerHTML = `
    <div class="item" id="informacoes">
                    <img src="../img/certo.svg" alt="certo">
                    <input type="text" name="" id="">
                  </div>
  `;
    divInformacoes.appendChild(novaLinha);
}

function removerLinha() {
    var divInformacoes = document.getElementById('informacoes');
    var linhasFormulario = divInformacoes.getElementsByClassName('form-row');

    if (linhasFormulario.length > 0) {
        var ultimaLinhaFormulario = divInformacoes.lastElementChild;
        divInformacoes.removeChild(ultimaLinhaFormulario);
    }

    var tabelaCorpo = document.getElementById('tabelaCorpo');
    var linhasTabela = tabelaCorpo.getElementsByTagName('tr');

    if (linhasTabela.length > 0) {

        tabelaCorpo.removeChild(linhasTabela[linhasTabela.length - 1]);

    }

}