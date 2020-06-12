<h1 align="center">
    <img alt="FixUfes" title="#FixUfes" src=".github/logo_ufes.png" width="250px" />
</h1>

<h4 align="center"> 
	FixUfes 🎓
</h4>

<p align="center">
  <a href="#-o-que-é">O que é a FixUfes?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: O que é a FixUfes?

A ideia surgiu como projeto extra para a aula de física no segundo período da faculdade, 
como forma de obter conhecimento na área de web e ajudar a universidade. O projeto consiste 
em um site onde as pessoas registram um problema que esteja acontecendo na Ufes, como 
lâmpada queimada, ar-condicionado com defeito, entre outros. E os técnicos da manutenção 
podem acessar o mapa pelo App, ver o local do problema e ir com os equipamentos para consertar.


<h1 align="center">
    <img alt="Example" title="Example" src=".github/trabalhadores.png" width="500px" />
</h1>


## :rocket: Tecnologias

Esse projeto foi desenvolvido usando as seguintes tecnologias:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

## :information_source: Como usar

Para copiar e executar essa aplicação você precisa do [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] intalados no seu computador.

No terminal digite:

### Instalar API 

```bash
# Clonar esse repositório
$ git clone https://github.com/andreocunha/FixUfes.git

# Vá para o ropositório
$ cd FixUfes/server

# Instale as dependências
$ yarn install

# Executar as Migrates
$ yarn knex:migrate

# Executar as Seeds
$ yarn knex:seed

# Iniciar o servidor
$ yarn dev

# running on port 3333
```

### Instalar Front-end

```bash
# Clonar esse repositório
$ git clone https://github.com/andreocunha/FixUfes.git

# Vá para o ropositório
$ cd FixUfes/web

# Instale as dependências
$ yarn install

# Execute
$ yarn start

# running on port 3000
```

### Instalar Mobile

```bash
# Clonar esse repositório
$ git clone https://github.com/andreocunha/FixUfes.git

# Vá para o ropositório
$ cd FixUfes/mobile

# Instale as dependências
$ yarn install

# Execute
$ yarn start

# O Expo vai abrir, você pode escanear o QR Code que aparecerá no terminal ou na página web usando o app da Expo no seu celular.

# Se aparecer algum problema com fontes, encerre a aplicação no terminal "CONTROL + C", execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

# E execute novamente
$ yarn start

```

Feito com ♥ por André Oliveira Cunha :wave: [Linkedin](https://www.linkedin.com/in/andr%C3%A9-oliveira-cunha-b26b3a156/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
