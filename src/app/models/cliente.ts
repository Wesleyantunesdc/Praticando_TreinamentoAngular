export interface Cliente{
    tipoPessoa: 'F' | 'j';  
    cpfCnpj: String;
    nomeCompleto: String;
    nomeUsual: String;
    dataCriacao: Date;
    contribuinte: 'C'|'CI'|'N';
    inscricaoEstadual: String;
    inscricaoMunicipal: String;
    email: String;
    grupo: String; 
}