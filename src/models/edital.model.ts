import mongoose, { Model, Schema }  from "mongoose";

interface IEdital {
    numero:string;
    municipio:string;
    empregos:IEmpregos[];
};

interface IEmpregos {
    descricao:string;
    totalVagas:number;
    inscricoes: IInscricoes[];
};

interface IInscricoes {
    numeroInscricao:number;
    nome:string;
    informacoesPessoais: IInformacoesPessoais;
    status:string;
    posicao:number;
    notaFinal:number;
    modalidade:String
};

interface IInformacoesPessoais{
    cpf:string;
    rg:string;
    email:string;
};

const informacoesPessoaisSchema = new Schema<IInformacoesPessoais>({
    cpf:{type:String,required:true},
    rg:{type:String, required:true},
    email:{type:String,required:true}
});

const inscricoesSchema = new Schema<IInscricoes>({
    numeroInscricao:{type:Number, required:true},
    nome:{type:String, required:true},
    informacoesPessoais:{type:informacoesPessoaisSchema, required:true},
    status:{type:String, required:true},
    posicao:{type:Number},
    notaFinal:{type:Number, required:true},
    modalidade:{type:String, required:true}
});

const empregosSchema = new Schema<IEmpregos>({
    descricao:{type:String,required:true},
    totalVagas:{type:Number,required:true},
    inscricoes:{type:[inscricoesSchema], required:true}
});

const editalSchema = new Schema<IEdital>({
    numero:{type:String, required:true},
    municipio:{type:String, required:true},
    empregos:{type:[empregosSchema], required:true}
});

const Edital: Model<IEdital> = mongoose.model<IEdital>(
    "Edital",editalSchema
);

export {Edital, IEdital}