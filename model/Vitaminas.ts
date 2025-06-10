import { Cadastro } from "./Cadastro";

export class Vitaminas extends Cadastro {
    private _capsulas: number
    
    constructor (numero: number, sabor: string, tipo: number, validade: string, preco: number, produto: string, capsulas: number) {
        super(numero, sabor, tipo, validade, preco, produto)
        this._capsulas = capsulas
    }

    public get capsulas() {
        return this._capsulas
    }

    public set capsulas(capsulas: number) {
        this._capsulas = capsulas
    }

    public visualizar(): void {
        super.visualizar()
        console.log('Quantidade de Capsulas', this.capsulas)
    }

}