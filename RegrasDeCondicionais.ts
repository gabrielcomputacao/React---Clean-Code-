// todo => tentar nao fazer negação

//  tentar fazer o contrario com a variavel e nao passar ela como negação para a condicional

const isUserOlderThan18Years = true;
const isUserYoungerThan18Years = true; // se ele é maior que 18 anos

// nao fazer
if (!isUserOlderThan18Years) {
  console.log(isUserYoungerThan18Years);
}

// todo => Early return vs else

//  preferencialmente usar o early return quando é possivel visualizar o early return , caso o codigo do if ser muito grande usar o else

// evitar usar o else

// usar em casos de muito if e muitas condicionais juntas

function isUserOlderThan18YearsEarlyFunction(user) {
  if (!user) {
    return { errors: true };
  }
  return user.age >= 18;
}

function isUserOlderThan18YearsFunction(user) {
  if (!user) {
    return { errors: true };
  } else {
    return user.age >= 18;
  }
}

// todo => Evite condicionais aninhadas

// procure nao fazer um if dentro de um if, melhor fazer embaixo do que dentro de um if

// nao fazer

if (true) {
  if (false) {
  }
}
