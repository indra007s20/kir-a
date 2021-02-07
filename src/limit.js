const limitend = (pushname2) => {
        return`*desculpe $ {pushname2} limite de hoje expira*\n*limite é redefinido a cada 12:00 MEIA NOITE*`
}

const limitcount = (limitCounts) => {
        return`
*「 LIMITE CONTA」*
o resto do seu limite : ${limitCounts}

NOTA : Se Terminar, Voce Pode Usar Novamente Amanha`
}
exports.limitend = limitend
exports.limitcount = limitcount