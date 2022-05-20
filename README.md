# Convertendo Video em Gif

Aplicação simples para converter vídeo no formato `.mp4` para `.gif`, sem abrir o navegador.

#### Pré-requisitos

Para rodar a aplicação, você vai precisar ter instalado em sua máquina:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o [ffmpeg](https://www.npmjs.com/package/ffmpeg-utils2).

#### Configurando o ambiente

1. Clone este repositório

```bash
git clone https://github.com/M0nicaVaz/convert-mp4-to-gif.git
```

2. Acesse a pasta do projeto no terminal

```bash
cd mp4-to-gif
```

3. Instale as dependências com o comando

```bash
 npm install
```

#### Utilizando a aplicação

1. Mova uma cópia do video `.mp4` para a pasta `./mp4-to-gif/videos/`
   <br>

2. Use o comando `node index.js` + o título do vídeo. <br> Ex: `node index.js meuvideo.mp4`

##### ❗️ Avisos:

- É feita uma conversão por vez.

- O arquivo `.mp4` será deletado após a conversão.

- Os gifs dentro da pasta `/gifs/` serão **sempre** substituídos.

- As pastas `/videos/` e `/gifs/` não devem ser utilizadas para armazenamento.

  ***

  ☕ Feito por Monica Vaz com ajuda do [npm](https://www.npmjs.com/package/node-video-to-gif)
