(function(){
    const valorCampos = [-1, -1, -1, -1, -1, 1, 1, 1 ,1, 2, 2, 2, 2, 2, 3, 4, 3, 4, 3, 4, 5, 6, 5, 4, 5]
    var valorCamposEmbaralhados = embaralharArray(valorCampos)
    criarTabela(valorCamposEmbaralhados)
  })();

function criarTabela(arr) {
    var tabuleiro = document.getElementById('campoMinado')    
    var tabela = document.createElement('table');
    tabela.setAttribute("id", "tabelaJogo");
    tabuleiro.appendChild(tabela)

    var linha1 = document.createElement('tr');
    var linha2 = document.createElement('tr');
    var linha3 = document.createElement('tr');
    var linha4 = document.createElement('tr');
    var linha5 = document.createElement('tr');

    const arrayDeLinhas  = [linha1, linha2, linha3, linha4, linha5]

    arrayDeLinhas.forEach(linha => {
        var indice = 0
        var tabela = document.getElementById('tabelaJogo')
        while ( indice < 5) {
            var componente = document.createElement('td'); 
            componente.innerHTML = '<div class="campoJogo" onClick="validaCampoJogo(this)"><span class="valorCampo">' + arr.shift() + '</span></div>'
            linha.appendChild(componente)
            tabela.appendChild(linha)
            indice ++
        }
        indice = 0
    })

    arr.forEach(campo => { 
        var div = document.createElement('div');
        div.innerHTML = '<td>'+ campo + '</td>' 
        //tabuleiro.appendChild(div)
    })

}

function validaCampoJogo(obj) {
    var valorDoCampo = obj.children[0].innerHTML
    if (valorDoCampo == -1) {
        obj.innerHTML = '<img id="imgBomba" src="_img/bomba.png" alt="bomba" width=80 height=80>' + '<audio src="_sound/explosao.mp3" autoplay>'
    }else {
        //TODO CRIAR EFEITO PARA MOSTRAR O NUMERO DO CAMPO
    }   
}

function embaralharArray(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}