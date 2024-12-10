export class Motorista{
    public id: string;
    public nome: string;
    public email: string;
    public senha: string;
    public datanasc: string;
    public cnh: string;
    public cpf: string;
    public imagem: string;
    public tipo: string;

    constructor(obj?: Partial<Motorista>) {
        if (obj){
            this.id=obj.id
            this.nome=obj.nome
            this.email=obj.email
            this.senha=obj.senha
            this.datanasc=obj.datanasc
            this.cnh=obj.cnh
            this.cpf=obj.cpf
            this.imagem=obj.imagem
            this.tipo=obj.tipo
        }
    }

    toString(){
        const objeto=`{
            "id":       "${this.id}",
            "nome":     "${this.nome}",
            "email":    "${this.email}",
            "senha":    "${this.senha}",
            "datanasc": "${this.datanasc}",
            "cnh":      "${this.cnh}",
            "cpf":      "${this.cpf}",
            "imagem":   "${this.imagem}",
            "tipo":     "${this.tipo}",
        }`
        return objeto
    }

    toFirestore(){
        const motorista={
            id: this.id,
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            datanasc: this.datanasc,
            cnh: this.cnh,
            cpf: this.cpf,
            imagem: this.imagem,
            tipo: this.tipo,
        }
        return motorista
    }

}