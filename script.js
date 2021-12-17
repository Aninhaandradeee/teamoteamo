function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

 if (ini.value.length == 0  || fim.value.length == 0 || passo.value.length == 0 ) {
      window.alert('[ERROR] Faltam dados!')
      res.innerHTML = 'impossivel contar!'
 } else {
     res.innerHTML = 'contando: <br>'
     let i = Number(ini.value)
     let f = Number(fim.value)
     let p = Number(passo.value)
     if (p <= 0 ){
         window.alert('Passo inválido! considerando passo 1')
         p = 1
     }
     if(i < f) {
         //contagem crescente
     for(var c = i; c <= f; c += p) {
         res.innerHTML += `${c} \u{2192}`
     } 
     }else {
         //contagem regressiva
        for(var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{2192}`
        }
    }
    res.innerHTML += ` \u{1f51a}`
    }
}