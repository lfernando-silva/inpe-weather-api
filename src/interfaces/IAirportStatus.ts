// http://servicos.cptec.inpe.br/XML/#res-estacoes-meteorologicas

export default interface IAirportStatus {
    codigo: string;
    atualizacao: string;
    pressao: string;
    temperatura: string;
    tempo: string;
    tempo_desc: string;
    umidade: string;
    vento_dir: string;
    vento_int: string;
    visibilidade: string;
}