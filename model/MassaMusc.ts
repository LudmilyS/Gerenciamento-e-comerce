import { Cadastro } from "./Cadastro";

export class MassaMuscular extends Cadastro {
    private _gramas: number
    private _sabor: string

    constructor (numero: number, tipo: number, validade: string, preco: number, produto: string, gramas: number, sabor: string){
        super (numero, tipo, validade, preco, produto)
        this._gramas = gramas
        this._sabor = sabor
    }

    public get gramas () {
        return this._gramas
    }

    public set gramas (gramas: number) {
        this._gramas = gramas
    }

    
    public get sabor () {
        return this._sabor
    }

    public set sabor (sabor: string) {
        this._sabor = sabor
    }

    public visualizar(): void {
        super.visualizar()
        console.log('Sabor: ', this.sabor)
        console.log('Tamanho do produto (g): ', this.gramas)
    }
}
