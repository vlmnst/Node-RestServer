//esto es opcional
const { response } = require('express')

const usuariosGet = (req, res = response) => {
    const params = req.query
    res.json({
        msg: ' GET - controlador',
        devolucion: params
    })
}

const usuariosPost = (req, res = response) => {

    const body = req.body

    res.json({
        msg: ' POST - controlador',
        data: body
    })
}

const usuariosPut = (req, res = response) => {
    const params = req.params

    res.json({
        msg: ' PUT - controlador',
        parametro: params
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: ' DELETE - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}