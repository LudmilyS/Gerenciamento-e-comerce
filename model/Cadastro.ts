export abstract class Cadastro {
    private _numero: number
    private _sabor: string
    private _tipo: number
    private _validade: string
    private _preco: number
    private _produto: string

    constructor (numero: number, sabor: string, tipo: number, validade: string, preco: number, produto: string) {
        this._numero = numero
        this._sabor = sabor
        this._tipo = tipo
        this._validade = validade
        this._preco = preco
        this._produto = produto
    }

    public get numero() {
        return this._numero
    }

    public set numero(numero: number) {
        this._numero = numero
    }

    public get sabor() {
        return this._sabor
    }

    public set sabor(sabor: string) {
        this._sabor = sabor
    }

    public get tipo() {
        return this._tipo
    }

    public set tipo(tipo: number) {
        this._tipo = tipo
    }

    public get validade() {
        return this._validade
    }

    public set validade(validade: string) {
        this._validade = validade
    }

    public get preco() {
        return this._preco
    }

    public set preco(preco: number) {
        this._preco = preco
    }

    public get produto() {
        return this._produto
    }

    public set produto(produto: string) {
        this._produto = produto
    }

    public visualizar(): void {
        let tipo: string = ''

        switch (this._tipo){
            case 1:
                tipo = 'Vitaminas'
                break

            case 2:
                tipo = 'Ganho de massa muscular'
                break
            
            
        }

        console.log("\n\n*****************************************************")
        console.log("Produto:")
        console.log("*****************************************************")
        console.log("Código do Produto: ", this._numero)
        console.log("Nome do produto: ", this._produto);
        console.log("Sabor: " , this._sabor);
        console.log("Preço: " + this._preco);
    
    }

}