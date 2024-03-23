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

// todo => Exemplos práticos

// billet, credit, debit

/* 
        O CalculateOrderDiscount desse jeito , fere o principio do open/closed, quanto mais meio de pagamento tiver , mais alteração vai ser preciso
        fazer dentro da classe e acrescentar um if

*/
class CalculateOrderDiscount {
  public execute(amount: number, paymentMethod: string) {
    if (paymentMethod === "billet") {
      return amount * 0.05;
    }
    if (paymentMethod === "credit") {
      return amount * 0.05;
    }
    if (paymentMethod === "debit") {
      return amount * 0.1;
    }

    return 0;
  }
}

/* Como seria possivel resolver e melhorar o  CalculateOrderDiscount */

interface PaymentMethod {
  getDiscountAmount: (amount: number) => number;
}

class Billet implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.05;
  }
}
class Credit implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.05;
  }
}
class Debit implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.05;
  }
}

/* agora o paymethod é do tipo da interface entao todos que implementam ela pode entrar como parametro e assim chama
   o metodo especifico de cada classe dentro do calculate, assim obedece todos os principios do solid e facilita para extensoes
   futuras
*/
class CalculateOrderDiscountCorrect {
  public execute(amount: number, paymentMethod: PaymentMethod) {
    return paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscountUser = new CalculateOrderDiscountCorrect();

/* 
   Com a implementação tambem foi implementado outros principios do solid, tudo que implementa se torna parte do principio do liskov
*/

calculateOrderDiscountUser.execute(2000, new Debit());
