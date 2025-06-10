import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors";
import { Cadastro } from "./model/Cadastro";

export function main() {

    let opcao: number;

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
        console.log("            6 - Comprar                              ")
        console.log("            7 - Sair                                 ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")
    
        console.log("Qual a opção desejada? ")
        opcao = readlinesync.questionInt("")

        if(opcao === 7) {
            console.log('\nFórmula X - Seu Segredo para a performance perfeita')
            sobre()
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar novo Produto\n\n")
                keyPress()
                break
            
            case 2:
                console.log("\n\nListar Produtos\n\n")
                break
        
            case 3:
                console.log("\n\nBuscar Produto por Numero\n\n")
                break

            case 4:
                console.log("\n\nAtualizar Produto\n\n")
                break

            case 5:
                console.log("\n\nExcluir Produto\n\n")
                break

            case 6:
                console.log("\n\nComprar\n\n")
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