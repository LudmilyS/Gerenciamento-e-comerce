import { Cadastro } from "../model/Cadastro";

export interface CadastroRepository {
    //CRUD 
    procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(cadastro: Cadastro ): void;
	atualizar(cadastro: Cadastro): void;
	deletar(numero: number): void;


}