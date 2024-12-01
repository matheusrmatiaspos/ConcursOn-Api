type InformacoesPessoaisDTO = {
    cpf:string,
    rg:string,
    email:string,
};

type IncricoesDTO = {
    numeroInscricao:number;
    nome:string;
    informacoesPessoais: InformacoesPessoaisDTO;
    status:string;
    posicao:number;
    notaFinal:number;
    modalidade:String
};

type EmpregosDTO = {
    descricao:string;
    totalVagas:number;
    inscricoes: IncricoesDTO[];
};

type EditalRequestDTO = {
    numero:string;
    municipio:string;
    empregos:EmpregosDTO[];
};

type EditalResponseDTO = {
    id:string,
    numero:string;
    municipio:string;
    empregos:EmpregosDTO[];
};

export {EditalRequestDTO, EditalResponseDTO};