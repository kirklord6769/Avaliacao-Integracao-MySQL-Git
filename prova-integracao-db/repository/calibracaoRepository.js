export async function criarCalibracao(calibracao) {const sql = `
    INSERT INTO criarCalibracao (codigo, nome, descricao)
    VALUES (?, ?, ?)`
    ;

    const [resultado] = await conexao.execute(sql, [
        equipamento.codigo,
        equipamento.nome,
        equipamento.descricao
    ]
);

return buscarPorId(resultado.insertId)
}

export async function listarCalibracoes() {const sql = `SELECT * FROM `;

    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function listarCalibracoesDetalhadas() {
}

export async function buscarCalibracaoPorId(id) {
}

export async function atualizarCalibracao(id, calibracao) {
}

export async function excluirCalibracao(id) {
}
