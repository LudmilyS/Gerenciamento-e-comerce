import { Cadastro } from "./Cadastro";

export class MassaMuscular extends Cadastro {
    private _gramas: number

    constructor (numero: number, sabor: string, tipo: number, validade: string, preco: number, produto: string, gramas: number){
        super (numero, sabor, tipo, validade, preco, produto)
        this._gramas = gramas
    }

    public get gramas () {
        return this._gramas
    }

    public set gramas (gramas: number) {
        this._gramas = gramas
    }


    public visualizar(): void {
        super.visualizar()
        console.log('Tamanho do produto (g): ', this.gramas)
    }
}
