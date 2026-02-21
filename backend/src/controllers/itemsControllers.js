import conn from '../bd.js';


export async function pegarProdutos(req, res) {

    let sql = "SELECT * FROM produtos";

    try {

        conn.query(sql, (erro, result) => {
            if (erro) {
                return res.status(400).json({
                    erro: 'erro ao buscar produtos'
                })
            }

            res.status(200).json({ msg: result });
        })

    } catch (error) {
        res.status(500).json()
    }

}