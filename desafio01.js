/**
@author: Hosana Gomes Pinto
@date: 18th, May 2018


Função principal : main
Função pedida no desafio: listarFatosVigentes


*/


var facts = [
  ['gabriel', 'endereço', 'av rio branco, 109', true],
  ['joão', 'endereço', 'rua alice, 10', true],
  ['joão', 'endereço', 'rua bob, 88', true],
  ['joão', 'telefone', '234-5678', true],
  ['joão', 'telefone', '91234-5555', true],
  ['joão', 'telefone', '234-5678', false],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '56789-1010', true],
];


var schema = [
    ['endereço', 'cardinality', 'one'],
    ['telefone', 'cardinality', 'many']
];





function mesmosEntidadeEAtributo(fatoVigente, registro) {
  return (fatoVigente[0] == registro[0]) && (fatoVigente[1] == registro[1]);
}

function mesmaEntidadeEAtributoEValor(fatoVigente, registro) {
  return (fatoVigente[0] == registro[0]) && (fatoVigente[1] == registro[1]) && (fatoVigente[2] == registro[2]);
}


// Se o valor deve ser comparado também no momento da execução ou não
function compararRegistros(fatoVigente, registro, comparaValor) {
  if(comparaValor)
    return mesmaEntidadeEAtributoEValor(fatoVigente, registro);

  return mesmosEntidadeEAtributo(fatoVigente, registro);
}


function ehRegistroAtivo(registro){
  return registro[registro.length-1];

}


function isOneToOne(registro, schema) {
  for (var i = 0; i < schema.length; i++) {
    if(registro[1] == schema[i][0]) {  //se o atributo é o mesmo
      
      if(schema[i][2] == 'one') //se o esquema é one-to-one
        return true;
      
      else 
        return false;
    }
  }

  return false;
}


function contidoNaLista(registro, fatosVigentes, comparaValor) {
  for (var i = 0; i < fatosVigentes.length; i++) {
    if(compararRegistros(fatosVigentes[i], registro, comparaValor)) {  //se a entidade e o atributo são iguais
        return i;
    }
  }

  return null;
}

function removerElemento(registro, fatosVigentes) {
  if (conti) {}
}


function listarFatosVigentes(facts, schema) {
  var fatosVigentes = [];

  for (var i = 0; i < facts.length; i++) {
    if(ehRegistroAtivo(facts[i])) {
          if(isOneToOne(facts[i], schema)) {
            
              var indexNaLista = contidoNaLista(facts[i], fatosVigentes, false);

              if (indexNaLista != null) {
                  fatosVigentes[indexNaLista] = facts[i];
              } else {
                  fatosVigentes.push(facts[i]);
              }

          } else {
            fatosVigentes.push(facts[i]);
          }
    } else {
         fatosVigentes.splice(contidoNaLista(facts[i],fatosVigentes,true), 1);
    }
  }

  return fatosVigentes;
}


function main() {
  vigentes = listarFatosVigentes(facts, schema);

  for (var i = 0; i < vigentes.length; i++) {
    print(vigentes[i]);
  }
}


main();
