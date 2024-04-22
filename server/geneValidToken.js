const jwt = require('jsonwebtoken')
const secretKey = '145863256325896258962589625896254896214785456655959+'

function gerarToken(usuario) {
    const token = jwt.sign({usuario}, secretKey, { expiresIn: '6h' })
    return token
}
function validarToken(token) {
    try{
        const decoded = jwt.verify(token, secretKey)
        return decoded.usuario
    }catch (error){
        console.log('chave invalida')
        return false
    }
}

module.exports = { gerarToken, validarToken }