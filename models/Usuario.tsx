export class Usuario{
    public id: string;
    public nome: string;
    public email: string;
    public senha: string;
    public datanasc: string;
    public cpf: string;
    public imagem: string;
    public tipo: string;
    public endereco: string;

    constructor(obj?: Partial<Usuario>) {
        if (obj){
            this.id=obj.id
            this.nome=obj.nome
            this.email=obj.email
            this.senha=obj.senha
            this.datanasc=obj.datanasc
            this.cpf=obj.cpf
            this.imagem=obj.imagem
            this.tipo=obj.tipo
            this.endereco=obj.endereco
        }
    }

    toString(){
        const objeto=`{
            "id":       "${this.id}",
            "nome":     "${this.nome}",
            "email":    "${this.email}",
            "senha":    "${this.senha}",
            "datanasc": "${this.datanasc}",
            "cpf":      "${this.cpf}",
            "imagem":   "${this.imagem}",
            "tipo":     "${this.tipo}",
            "endereco": "${this.endereco}",
        }`
        return objeto
    }

    toFirestore(){
        const usuario={
            id: this.id,
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            datanasc: this.datanasc,
            cpf: this.cpf,
            imagem: this.imagem,
            tipo: this.tipo,
            endereco: this.endereco,
        }
        return usuario
    }

}