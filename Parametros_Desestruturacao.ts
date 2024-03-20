// mesmo com tipagem estatica (typescript) , receber e enviar parametros nomeados

// typescript so funciona em ambiente de desenvolvimento, por isso é importante enviar e receber parametros nomeados

function createUserRoute(body, params) {}

function createUserController(data) {
  usersRepository.create(data);
}
function createUserControllerClean(data) {
  const { email, senha } = data;

  usersRepository.create({
    email,
    senha,
  });
}

const usersRepository = {
  create(data) {},
};

// prefira receber objetos ao inves de multi parametros

// para nao acontecer isso

// nao da para saber o que é nulo
createUserRoute(null, { id: "1" });

// todo =>  preferivel receber um objeto como parametro
