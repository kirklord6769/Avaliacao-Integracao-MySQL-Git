const conexao = require('../config/conexao.js');

export async function criarEquipamento(equipamento) { 
    const sql = `
    INSERT INTO equipamento (codigo, nome, descricao)
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







export async function listarEquipamentos() {
    const sql = `SELECT * FROM equipamentos`;

    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarEquipamentoPorId(id) {
    const aql = `SELECT * FROM equipamentos WHERE ID = ?`;

    const [resultado] = await conexao.execute(sql,[id]);

    return resultado[0];
}

export async function atualizarEquipamento(id, equipamento) {const sql = `
    UPDATE equipamento
    SET codigo = ?, nome = ?, descricao = ?
    WHERE ID = ?`;

    const [resultado] = await conexao.execute(sql, [
        equipamento.codigo,
        equipamento.nome,
        equipamento.descricao,
        id
    ]);

    if (resultado.affectedRows == 0) {
        return undefined;
    }

    return buscarPorId(id);
}

export async function excluirEquipamento(id) {
    const sql = 'DELETE FROM equipamento WHERE id = ?';

    const [resultado] = await conexao.execute(sql,[id]);

    return resultado.affectedRows > 0;
}

module.exports = {
    criarEquipamento,
    listarEquipamentos,
    buscarEquipamentoPorId,
    atualizarEquipamento,
    excluirEquipamento
}






