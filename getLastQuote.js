const soap = require('soap')

const URL = 'https://www3.bcb.gov.br/sgspub/JSP/sgsgeral/FachadaWSSGS.wsdl'
const VALUE_ATT_NAME = '$value'

const parserResponse = (response) => ({
    id: response.getUltimoValorVOReturn.oid[VALUE_ATT_NAME],
    isSpecial: response.getUltimoValorVOReturn.especial[VALUE_ATT_NAME],
    source: response.getUltimoValorVOReturn.fonte[VALUE_ATT_NAME],
    fullName: response.getUltimoValorVOReturn.fullName[VALUE_ATT_NAME],
    shortName: response.getUltimoValorVOReturn.shortName[VALUE_ATT_NAME],
    fullNamePTbr: response.getUltimoValorVOReturn.nomeCompleto[VALUE_ATT_NAME],
    shortNamePTbr: response.getUltimoValorVOReturn.nomeAbreviado[VALUE_ATT_NAME],
    periodicity: response.getUltimoValorVOReturn.periodicidade[VALUE_ATT_NAME],
    periodicityInitials: response.getUltimoValorVOReturn.periodicidadeSigla[VALUE_ATT_NAME],
    isLocked: response.getUltimoValorVOReturn.possuiBloqueios[VALUE_ATT_NAME],
    isPublic: response.getUltimoValorVOReturn.publica[VALUE_ATT_NAME],
    lastValue: response.getUltimoValorVOReturn.ultimoValor.valor[VALUE_ATT_NAME],
    defaultUnitPTbr: response.getUltimoValorVOReturn.unidadePadrao[VALUE_ATT_NAME],
    defaultUnit: response.getUltimoValorVOReturn.unidadePadraoIngles[VALUE_ATT_NAME],
    dateCurrency: new Date(
            response.getUltimoValorVOReturn.ultimoValor.ano[VALUE_ATT_NAME],
            (response.getUltimoValorVOReturn.ultimoValor.mes[VALUE_ATT_NAME] -1),
            response.getUltimoValorVOReturn.ultimoValor.dia[VALUE_ATT_NAME])
})

module.exports = (currencyCode) =>
    new Promise((resolve, reject) => {
        soap.createClient(URL, function (err, client) {
            if (err)
                reject(err)
            client.getUltimoValorVO({ codigoSerie: currencyCode }, function (err, result) {
                if(err)
                    reject(err)
                resolve(parserResponse(result))
            })
        })
    })

