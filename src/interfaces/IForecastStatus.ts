// http://servicos.cptec.inpe.br/XML/#res-estacoes-meteorologicas
// http://servicos.cptec.inpe.br/XML/#res-condicoes-capitais

export default interface IForecastStatus {
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