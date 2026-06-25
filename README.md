<div align="center">

# DJ SoundPad

### Painel interativo de sons para navegador com controle por teclado físico e botões virtuais

<a href="https://github.com/StellaKarolinaNunes/DJ-SoundPad">
  <img src="./assets/banner.png" alt="Banner do projeto DJ SoundPad" width="100%">
</a>

<br>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">

<img src="https://img.shields.io/badge/Web%20Audio-Interactive-7C3AED?style=for-the-badge" alt="Web Audio">

<img src="https://img.shields.io/badge/Status-Concluído-2EA44F?style=for-the-badge" alt="Status do projeto">

<br><br>

<p align="center">
  <a href="https://github.com/StellaKarolinaNunes/DJ-SoundPad">
    <img src="https://img.shields.io/badge/⌘%20Explorar%20Código--Fonte-181717?style=for-the-badge&logo=github&logoColor=white" alt="Explorar Código-Fonte">
  </a>
  <a href="#preview">
    <img src="https://img.shields.io/badge/◈%20Ver%20Telas%20do%20Projeto-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Ver Telas do Projeto">
  </a>
</p>

</div>

---

## Sobre o projeto

O **DJ SoundPad** é uma aplicação web interativa desenvolvida com **HTML, CSS e JavaScript** para simular um painel de DJ diretamente no navegador.

A interface apresenta teclas virtuais que reproduzem sons ao serem clicadas. O usuário também pode utilizar o teclado físico para ativar os mesmos efeitos sonoros, criando uma experiência mais dinâmica e parecida com uma controladora musical.

O projeto explora eventos de teclado, reprodução de áudio, feedback visual, animações e organização de interações no navegador.

> Este projeto foi desenvolvido para fins educacionais e de portfólio, com foco em JavaScript, eventos do DOM, interação com teclado e criação de interfaces web imersivas.

---

## Objetivo

O objetivo do projeto é demonstrar como uma aplicação web pode responder a interações do usuário por meio de cliques e pressionamento de teclas.

A proposta reforça conceitos importantes como:

* manipulação de eventos com JavaScript;
* associação entre teclas físicas e elementos da interface;
* reprodução de arquivos de áudio;
* animações e feedback visual;
* atualização dinâmica de classes CSS;
* criação de interfaces interativas;
* desenvolvimento web sem frameworks;
* organização de recursos estáticos.

---

## Funcionalidades

* **Teclas virtuais interativas:** botões clicáveis para reprodução de sons.
* **Controle por teclado físico:** cada tecla configurada dispara um som correspondente.
* **Reprodução de áudio:** ativação de efeitos sonoros diretamente no navegador.
* **Feedback visual:** animações aplicadas quando uma tecla é acionada.
* **Painel de LEDs:** elementos visuais piscantes para criar uma atmosfera de DJ.
* **Interface futurista:** uso de gradientes, sombras e efeitos visuais.
* **Funcionamento offline:** os sons e arquivos do projeto podem ser utilizados localmente.
* **Personalização de sons:** possibilidade de substituir arquivos de áudio existentes.
* **Extensibilidade:** estrutura preparada para adicionar novas teclas e efeitos.

---

## Tecnologias utilizadas

| Tecnologia             | Aplicação no projeto                                 |
| ---------------------- | ---------------------------------------------------- |
| HTML5                  | Estrutura do painel e teclas virtuais                |
| CSS3                   | Estilização, animações, gradientes e efeitos visuais |
| JavaScript             | Eventos de clique, teclado e reprodução de sons      |
| Audio API do navegador | Reprodução dos efeitos sonoros                       |
| Git                    | Controle de versão                                   |
| GitHub                 | Hospedagem do repositório                            |

---

## Destaques técnicos

* Interação por clique e teclado físico;
* Associação entre teclas e efeitos sonoros;
* Feedback visual após cada interação;
* Simulação de painel musical no navegador;
* Interface temática com LEDs e efeitos visuais;
* Aplicação leve, sem dependências externas obrigatórias;
* Funcionamento local sem necessidade de backend;
* Estrutura fácil de expandir com novos sons e teclas.

---

## Fluxo de funcionamento

```text
Usuário acessa o DJ SoundPad
        │
        ▼
Painel virtual é exibido
        │
        ├── Clique em uma tecla virtual
        │
        └── Pressionamento de tecla física
        │
        ▼
JavaScript identifica a ação
        │
        ▼
Som correspondente é reproduzido
        │
        ▼
Animação e feedback visual são ativados
        │
        ▼
Painel permanece disponível para novas interações
```

---

## Preview

<div align="center">

<img src="https://github.com/user-attachments/assets/54e34d2a-444a-4f97-bbf8-e9e10dc5d7d7" alt="Tela principal do DJ SoundPad" width="100%">

<br><br>

<img src="https://github.com/user-attachments/assets/ea9f8f5d-d307-4b7e-b8e8-c7f20dcb4bd3" alt="Interface interativa do DJ SoundPad" width="100%">

</div>

---

## Estrutura sugerida do projeto

```bash
DJ-SoundPad/
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── sounds/
│   │   ├── sound-1.mp3
│   │   ├── sound-2.mp3
│   │   └── outros-efeitos-sonoros/
│   │
│   ├── images/
│   │   └── imagens-do-projeto/
│   │
│   └── js/
│       └── script.js
│
├── index.html
├── LICENSE
└── README.md
```

> Ajuste os nomes dos arquivos da estrutura acima para refletirem exatamente o conteúdo do seu repositório.

---

## Como executar o projeto

### Pré-requisitos

Antes de iniciar, é necessário ter instalado:

* navegador atualizado, como Google Chrome, Firefox, Microsoft Edge ou Safari;
* Git, para clonar o repositório;
* editor de código opcional, como VS Code;
* extensão Live Server opcional para desenvolvimento local.

### 1. Clone o repositório

```bash
git clone https://github.com/StellaKarolinaNunes/DJ-SoundPad.git
```

### 2. Acesse a pasta do projeto

```bash
cd DJ-SoundPad
```

### 3. Execute a aplicação

Abra o arquivo `index.html` no navegador.

No Linux:

```bash
xdg-open index.html
```

No macOS:

```bash
open index.html
```

No Windows:

```bash
start index.html
```

---

## Executar com Live Server

Para desenvolver com atualização automática no navegador:

1. Abra a pasta do projeto no VS Code;
2. Instale a extensão **Live Server**;
3. Clique com o botão direito em `index.html`;
4. Selecione **Open with Live Server**.

---

## Como adicionar novos sons

### 1. Adicione o arquivo de áudio

Coloque um novo arquivo, por exemplo, em:

```text
assets/sounds/novo-som.mp3
```

### 2. Crie uma nova tecla no HTML

```html
<div class="key" data-key="novo-codigo">Novo Som</div>
```

### 3. Atualize o mapeamento no JavaScript

```javascript
const soundMapping = {
  "novo-codigo": "assets/sounds/novo-som.mp3",
};
```

Assim, a nova tecla poderá reproduzir o som configurado.

---

## Perguntas frequentes

### O projeto funciona em dispositivos móveis?

A aplicação pode ser aberta em navegadores móveis, mas a experiência foi pensada principalmente para telas maiores e para o uso do teclado físico.

### Posso trocar os sons existentes?

Sim. Basta substituir os arquivos presentes na pasta de sons ou alterar os caminhos configurados no JavaScript.

### Posso adicionar novas teclas?

Sim. Crie um novo elemento no HTML e associe uma nova tecla ao arquivo de áudio correspondente no JavaScript.

### O projeto funciona sem internet?

Sim. Como os arquivos de áudio e código ficam armazenados localmente, o projeto pode funcionar offline após ser aberto no navegador.

### Por que uma tecla não está reproduzindo som?

Verifique se a tecla está mapeada corretamente no arquivo JavaScript e se o caminho do arquivo de áudio existe.

---

## Roadmap

### Interações e sons

* [x] Reprodução de sons por clique;
* [x] Reprodução de sons por teclado físico;
* [x] Feedback visual ao pressionar teclas;
* [x] Painel de LEDs e efeitos visuais;
* [ ] Adicionar mais bancos de sons;
* [ ] Criar categorias de efeitos;
* [ ] Adicionar controle de volume;
* [ ] Criar botão para interromper todos os sons.

### Experiência do usuário

* [ ] Melhorar a responsividade para celulares;
* [ ] Criar modo escuro e claro;
* [ ] Adicionar guia visual das teclas disponíveis;
* [ ] Exibir nome do som em reprodução;
* [ ] Adicionar animações de equalizador;
* [ ] Criar atalhos configuráveis pelo usuário.

### Evoluções futuras

* [ ] Permitir upload de sons personalizados;
* [ ] Criar gravação de sequência de sons;
* [ ] Criar modo de loop;
* [ ] Criar histórico de interações;
* [ ] Adicionar suporte para controladores MIDI;
* [ ] Transformar a aplicação em PWA;
* [ ] Publicar uma demonstração online.

---

## Contribuição

Contribuições são bem-vindas para melhorar a interface, adicionar novos sons ou criar novas interações.

```bash
# Faça um fork do repositório no GitHub

# Clone o seu fork
git clone https://github.com/SEU-USUARIO/DJ-SoundPad.git

# Entre na pasta do projeto
cd DJ-SoundPad

# Crie uma branch para sua melhoria
git checkout -b feature/novo-efeito-sonoro

# Faça as alterações e teste no navegador

# Adicione os arquivos alterados
git add .

# Crie um commit descritivo
git commit -m "feat: adiciona novo efeito sonoro"

# Envie a branch para o GitHub
git push origin feature/novo-efeito-sonoro
```

Depois, abra um Pull Request explicando:

* quais sons ou interações foram adicionados;
* quais arquivos foram alterados;
* como a funcionalidade foi testada;
* se houve alteração no layout ou no comportamento do teclado.

### Diretrizes

* Mantenha a separação entre HTML, CSS e JavaScript;
* Utilize nomes claros para teclas e arquivos de áudio;
* Teste os sons antes de abrir um Pull Request;
* Evite adicionar áudios muito pesados;
* Preserve a experiência de teclado físico;
* Mantenha a interface legível e organizada;
* Atualize o README ao adicionar funcionalidades relevantes.

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

```text
MIT License

Você pode usar, modificar e distribuir este projeto,
desde que mantenha os créditos e a referência ao repositório original.
```

---

## Créditos

### Desenvolvimento

* **Desenvolvimento principal:** [Stella Karolina Nunes](https://github.com/StellaKarolinaNunes)

### Tecnologias e recursos

* **Estrutura:** HTML5;
* **Estilização:** CSS3;
* **Interações:** JavaScript puro;
* **Áudio:** recursos nativos do navegador;
* **Controle de versão:** Git e GitHub;
* **Badges:** [Shields.io](https://shields.io/).
