# 🌿 Salgueiro - Aplicação Mobile

> **Descrição Resumida:** O **Salgueiro** é uma aplicação mobile institucional desenvolvida como um refúgio literário e organizador de leituras pessoal. Inspirado na estética acolhedora do álbum *folklore* da Taylor Swift, o aplicativo permite aos leitores gerir os seus livros em leitura atual, organizar a sua lista de desejos (*To Be Read*) e navegar pelas informações da aplicação através de uma interface fluida, rústica e intuitiva.

---

## 👨‍🎓 Informações da Atividade
* **Disciplina:** Programação para Dispositivos Móveis I
* **Aplicação:** Salgueiro - Livros & Poesia
* **Empresa Fictícia:** Salgueiro Literary Club / Salgueiro Editora

---

## 🛠️ Tecnologias Utilizadas
* **React Native** (via Expo)
* **React Navigation** (`@react-navigation/native` e `@react-navigation/native-stack`)
* **JavaScript (ES6+)**
* **StyleSheet** para estilização nativa e padronização visual

---

## 🔐 Credenciais de Teste (Simulação de Login)
Em conformidade com os requisitos da atividade prática, a autenticação é simulada diretamente no código (sem persistência de dados ou serviços externos):

* **Usuário:** `folk`
* **Senha:** `123456`

---

## 📱 Funcionalidades Implementadas

1. **Tela de Login (`LoginScreen`):**
   * Entrada de credenciais com campo de senha oculto (`secureTextEntry`).
   * Validações ativas para campos vazios e tratamento de erros de autenticação através de alertas informativos.
   * Direcionamento automático para a tela *Home* mediante credenciais válidas.

2. **Tela Home (`HomeScreen`):**
   * Exibição das leituras ativas e organização de livros ("Leitura Atual" e "Quero Ler") com suporte a capas de livros personalizadas.
   * Navegação direta para as telas institucionais (*Sobre* e *Contato*).
   * Botão de encerramento de sessão (*Sair*) que redireciona de volta para a tela de *Login*.

3. **Tela Sobre (`SobreScreen`):**
   * Apresentação da versão da aplicação (`1.0`), nome da empresa fictícia e a missão/visão do projeto literário.
   * Botão de retorno intuitivo para a *Home*.

4. **Tela Contato (`ContatoScreen`):**
   * Informações completas dos canais de atendimento (Telefone, E-mail, Endereço fictício e horário).
   * BotãoCom certeza! Preparei um **`README.md`** completo e estruturado para o teu repositório no GitHub[cite: 18]. Ele cumpre rigorosamente todos os pontos exigidos pelo professor na Seção 21 do PDF[cite: 18, 19].

Basta criares um ficheiro chamado **`README.md`** na raiz do teu projeto no VS Code e colar o conteúdo abaixo:

---

```markdown
# 🌿 Salgueiro - Biblioteca de Histórias

> Aplicação mobile institucional desenvolvida como projeto acadêmico para a disciplina de **Programação para Dispositivos Móveis I**[cite: 9]. O aplicativo simula um refúgio literário com acompanhamento de leituras, inspirado na estética do álbum *folklore*[cite: 5].

---

## 👨‍🎓 Informações do Aluno
* **Nome do Aluno:** [Teu Nome Completo Aqui]
* **Nome da Aplicação:** Salgueiro - Livros & Poesia[cite: 9]
* **Tecnologia / Framework:** React Native com Expo e React Navigation (`native-stack`)[cite: 15, 18]

---

## 📝 Descrição Resumida
O **Salgueiro** é uma aplicação mobile focada na organização pessoal de leituras[cite: 5]. O protótipo conta com um fluxo de acesso restrito (simulado)[cite: 5, 6], acompanhamento de leituras atuais e listas de livros ("Quero Ler"), além de páginas institucionais com informações da editora/clube e formulários de contato[cite: 5, 8, 9].

---

## 🚀 Instruções para Executar o Projeto

### Pré-requisitos
* **Node.js** instalado na máquina.
* Aplicação **Expo Go** no telemóvel (iOS ou Android) ou ambiente configurado para Web.

### Passo a Passo
1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/teu-usuario/Salgueiro-livrim.git
   cd Salgueiro-livrim