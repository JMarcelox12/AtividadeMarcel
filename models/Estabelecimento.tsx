export class Estabelecimento{
    public id: string;
    public nome: string;
    public email: string;
    public senha: string;
    public cnpj: string;
    public endereco: string;

    constructor(obj?: Partial<Estabelecimento>) {
        if (obj){
            this.id=obj.id
            this.nome=obj.nome
            this.email=obj.email
            this.senha=obj.senha
            this.cnpj=obj.cnpj
            this.endereco=obj.endereco
        }
    }

    toString(){
        const objeto=`{
            "id":       "${this.id}",
            "nome":     "${this.nome}",
            "email":    "${this.email}",
            "senha":    "${this.senha}",
            "cnpj":     "${this.cnpj}",
            "endereco"  "${this.endereco}"
        }`
        return objeto
    }

    toFirestore(){
        const estebelecimento={
            id: this.id,
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            cnpj: this.cnpj,
            endereco: this.endereco
        }
        return estebelecimento
    }

}