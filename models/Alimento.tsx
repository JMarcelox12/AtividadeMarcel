export class Alimento{
    public id: string;
    public nome: string;
    public descricao: string;
    public preco: string;

    constructor(obj?: Partial<Alimento>) {
        if (obj){
            this.id=obj.id
            this.nome=obj.nome
            this.descricao=obj.descricao
            this.preco=obj.preco
        }
    }

    toString(){
        const objeto=`{
            "id":       "${this.id}",
            "nome":     "${this.nome}",
            "descricao": "${this.descricao}",
            "preco":    "${this.preco}"
        }`
        return objeto
    }

    toFirestore(){
        const alimento={
            id: this.id,
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
        }
        return alimento
    }

}