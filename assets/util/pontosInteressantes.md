## 🟨 JS

Nesse tipo de função curta, se ela ja retorna diretamente uma infomrmação e não tenha mais nada dentro dela, 
podemos tirar as chaves (que seriam os limites das funções) e tirar a palavra "return".

> const participanteExiste = participantes.find(<br>(p) => {return p.email == participante.email;<br>});

Isso resultaria no modelo abaixo:

> const participanteExiste = participantes.find(<br>(p) => p.email == participante.email<br>);

## 🟦 CSS

Pega tudo e tira qualquer tipo de informação que existir de algum momento feito pelo navegador (browser)

> elemento {<br> all:   unset <br>}

Pega apenas as div filhas do fieldset

> fieldset > div {<br>}
  
