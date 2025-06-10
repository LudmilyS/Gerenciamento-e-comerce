import { Cadastro } from '../model/Cadastro';
import { CadastroRepository } from './../repository/CadastroRepository';

export class CadastroController implements CadastroRepository {

    private listasProdutos: Array <Cadastro> = new Array<Cadastro>()
    numero: number = 0

    procurarPorNumero(numero: number): void {
       let buscaCadastro = this.buscarNoArray(numero)

       if (buscaCadastro !== null) {
        buscaCadastro.visualizar()
       } else {
        console.log('Produto não encontrado!')
       }
    }

    listarTodas(): void {
         for (let cadastro of this.listasProdutos){
            cadastro.visualizar()
        }
    }
    cadastrar(cadastro: Cadastro): void {
        this.listasProdutos.push(cadastro)
        console.log('Produto', cadastro.numero, ' foi cadastrado com sucesso!!')

    }
    atualizar(cadastro: Cadastro): void {
        let buscaCadastro = this.buscarNoArray(cadastro.numero)

        if (buscaCadastro !== null) {
            this.listasProdutos[this.listasProdutos.indexOf(buscaCadastro)] = cadastro
            console.log('O produto', cadastro.numero, ' foi atualizado com sucesso!!')
        } else {
            console.log('Produto não encontrado!!')
        }
    }

    deletar(numero: number): void {
        let buscaCadastro = this.buscarNoArray(numero)

        if (buscaCadastro !== null) {
            this.listasProdutos.splice(this.listasProdutos.indexOf(buscaCadastro), 1)
            console.log('\nO produto foi excluido com sucesso!')
        } else {
            console.log('\nProduto não encontrado!')
        }
    }

    public gerarNumero() : number {
        return ++ this.numero
    }


    public buscarNoArray(numero: number): Cadastro | null {
        for (let cadastro of this.listasProdutos){
            if(cadastro.numero === numero)
                return cadastro
        }
        return null
    }
}