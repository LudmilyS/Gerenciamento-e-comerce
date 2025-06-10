import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors";
import { CadastroController } from "./controller/CadastroController";
import { Vitaminas } from "./model/Vitaminas";
import { MassaMuscular } from "./model/MassaMusc";
import { Cadastro } from "./model/Cadastro";

export function main() {

    let cadastro: CadastroController = new CadastroController()
    let opcao, numero, tipo, preco, capsulas, gramas: number;
    let produto, validade, sabor : string
    
    const tiposProdutos = ['Vitaminas', 'Massa Muscular']

    //teste
    


    while (true) {

        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("                   Fórmula X                         ")
        console.log("        Seu segredo para a performance perfeita      ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("            1 - Cadastrar novo Produto               ")
        console.log("            2 - Listar Produtos                      ")
        console.log("            3 - Buscar Produto por Numero            ")
        console.log("            4 - Atualizar Produto                    ")
        console.log("            5 - Excluir Produto                      ")
        console.log("            6 - Sair                                 ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")
    
        console.log("Qual a opção desejada? ")
        opcao = readlinesync.questionInt("")

        if(opcao === 6) {
            console.log('\nFórmula X - Seu Segredo para a performance perfeita')
            sobre()
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar novo Produto\n\n")

                console.log('Digite o tipo do produto: ')
                console.log('\n1- Vitamina \n2- Massa Muscular')
                tipo = readlinesync.questionInt('')

                console.log('Digite o nome do produto: ')
                produto = readlinesync.question('')

                console.log('Digite a validade do produto (dd/mm/aaaa): ')
                validade = readlinesync.question('')

                console.log('Digite o preço do produto: ')
                preco = readlinesync.questionFloat('')

                switch (tipo) {
                    case 1: //Vitaminas
                        console.log('Quantidade de capsulas: ')
                        capsulas = readlinesync.questionInt('')
                        cadastro.cadastrar(new Vitaminas(cadastro.gerarNumero(), tipo, validade, preco, produto, capsulas))
                    break

                    case 2: //Massa Muscular
                        console.log('Sabor do produto: ')
                        sabor = readlinesync.question('')
                        console.log('Digite quantas gramas tem o produto: ')
                        gramas = readlinesync.questionFloat('')

                        cadastro.cadastrar(new MassaMuscular(cadastro.gerarNumero(), tipo, validade, preco, produto, gramas, sabor))
                    break
                }
                
                keyPress()
                break
            
            case 2:
                console.log("\n\nListar Produtos\n\n")
                cadastro.listarTodas()

                keyPress()
                break
        
            case 3:
                console.log("\n\nBuscar Produto por Numero\n\n")

                console.log('Digite o número do produto: ')
                numero = readlinesync.questionInt('')
                cadastro.procurarPorNumero(numero)

                keyPress()
                break

            case 4:
                console.log("\n\nAtualizar Produto\n\n")

                console.log('Digite o número do produto: ')
                numero = readlinesync.questionInt('')

                let cadastrar = cadastro.buscarNoArray(numero)

                if (cadastrar !== null) {
                    
                    console.log('Digite o tipo do produto: ')
                    console.log('\n1- Vitamina \n2- Massa Muscular')
                    tipo = readlinesync.questionInt('')

                    console.log('Digite o nome do produto: ')
                    produto = readlinesync.question('')

                    console.log('Digite a validade do produto (dd/mm/aaaa): ')
                    validade = readlinesync.question('')

                    console.log('Digite o preço do produto: ')
                    preco = readlinesync.questionFloat('')

                    switch (tipo) {
                        case 1: //Vitaminas
                            console.log('Quantidade de capsulas: ')
                            capsulas = readlinesync.questionInt('')
                            cadastro.atualizar(new Vitaminas(numero, tipo, validade, preco, produto, capsulas))
                        break

                        case 2: //Massa Muscular
                            console.log('Sabor do produto: ')
                            sabor = readlinesync.question('')
                            console.log('Digite quantas gramas tem o produto: ')
                            gramas = readlinesync.questionFloat('')
                            cadastro.atualizar(new MassaMuscular(numero, tipo, validade, preco, produto, gramas, sabor))
                        break
                }
            } else {
                console.log('Produto não encontrado!!')
            }

                keyPress()
                break

            case 5:
                console.log("\n\nExcluir Produto\n\n")

                console.log('Digite o número do produto: ')
                numero = readlinesync.questionInt('')
                cadastro.deletar(numero)

                keyPress()
                break

            default:
                console.log('\nOpção Inválida!\n')
                break
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************")
    console.log("Projeto Desenvolvido por: ")
    console.log("Ludmily Oliveira - ludmily.oliveira@hotmail.com")
    console.log("github.com/LudmilyS")
    console.log("*****************************************************")
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}




main()