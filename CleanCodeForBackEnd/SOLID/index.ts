// SOLID

/* 
     - SRP = single responsability principle - unica responsabilidade

        Cada entidade,classe, case de uso, serviço, metodo, função deve ser reponsavel por apenas uma ação

     - OCP = open closed principle

        Classes, entidades devem estar abertar para extensão e nao para modificação
        Ao longo do fluxo da aplicação deve ser possivel adicionar comportamento porem nunca modificar um comportamento que ja existe

     - LSP = Liskov substitution principle

        Deve ser possivel substituir uma dependencia pai pela dependencia filho sem dar erro

     - ISP  = interface segregation principle

        Separar as interfaces, interface traz algumas regras que uma classe precisa seguir

     - DIP  = Dependency inversion principle

        As dependencias de uma classe devem ser injetadas inversamente ao tradicional

        Exemplo:

        Errado: 

        function createUser(){
            createUserOnDatabase()
        }

        Certo:

        function createUser( createUserOnDatabase: () => void ){
              createUserOnDatabase()
        }

        A classe createUser nao deve conhecer de fato que está fazendo a importação

*/
