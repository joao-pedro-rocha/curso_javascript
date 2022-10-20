const hello = 'Hello, friend'

function saySomething(something) {
    console.log(something)
}

let person = {
    name: 'João Pedro',
    age: 20,

    sayHello(){
        console.log('Hello', this.name)
    }
}

let dinamicModule = () => {
    return 'Cheguei'
}

// Permite que variáveis, funções e objetos sejam exportados.
export {
    hello,
    saySomething,
    person,
    dinamicModule,
}