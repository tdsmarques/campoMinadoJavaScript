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
    app.arrayIdBombas = []

    var linha1 = document.createElement('tr');
    var linha2 = document.createElement('tr');
    var linha3 = document.createElement('tr');
    var linha4 = document.createElement('tr');
    var linha5 = document.createElement('tr');

    const arrayDeLinhas  = [linha1, linha2, linha3, linha4, linha5]
    app.contador = 1
    arrayDeLinhas.forEach(linha => {
        var indice = 0
        var tabela = document.getElementById('tabelaJogo')
        while ( indice < 5) {
            var componente = document.createElement('td');
            let vlr = arr.shift()

            componente.innerHTML = '<div class="campoJogo" id="campo'+ app.contador + '" onClick="validaCampoJogo(this)"><span class="valorCampo">' + vlr + '</span></div>'

            if (vlr == -1){
                app.arrayIdBombas.push("campo" + app.contador)
                console.log(app.arrayIdBombas)               
            }

            linha.appendChild(componente)
            tabela.appendChild(linha)
            indice ++
            app.contador ++
        }
        indice = 0
    })

    arr.forEach(campo => { 
        var div = document.createElement('div');
        div.innerHTML = '<td>'+ campo + '</td>' 
    })
}

function validaCampoJogo(obj) {
    var valorDoCampo = obj.children[0].innerHTML
    animation(obj, 1 , 0, 100)
    if (valorDoCampo == -1) {
        let bomba1 = document.getElementById(app.arrayIdBombas[0])
        let bomba2 = document.getElementById(app.arrayIdBombas[1])
        let bomba3 = document.getElementById(app.arrayIdBombas[2])
        let bomba4 = document.getElementById(app.arrayIdBombas[3])
        let bomba5 = document.getElementById(app.arrayIdBombas[4])

        var arrayBombas = [bomba1, bomba2, bomba3, bomba4, bomba5]

        arrayBombas.forEach(bomba => {
            bomba.innerHTML = '<img id="imgBomba" src="_img/bomba.png" alt="bomba" width=80 height=80>' + '<audio src="_sound/explosao.mp3" autoplay>'
        })

    }else {
        obj.innerHTML = '<span class="valorCampoVirado">' + valorDoCampo + '</span>' + '<audio src="_sound/sucesso.mp3" autoplay>'
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

function animation(element,time,initial,end){
    if(initial == 0){
        increment = 2;
        element.style.display = "block";
    }else {
        increment = -2;
    }
    opc = initial;
    intervalo = setInterval(function(){
        if((opc == end)){
            if(end == 0){
                                element.style.display = "none";
            }
            clearInterval(intervalo);
        }else {
            opc += increment;
            element.style.opacity = opc/100;
            element.style.filter = "alpha(opacity="+opc+")";
        }
    },time * 10);
}