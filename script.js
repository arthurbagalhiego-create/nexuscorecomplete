let saldo = 0;
let contadorUsuarios = 0;

// LOGIN ESPECÍFICO
function login() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  if (nome === "" || email === "" || senha === "") {
    erro.textContent = "Preencha todos os campos!";
    return;
  }

  // LOGIN FIXO
  if (nome !== "drake" || email !== "drake.dev@gmail.com" || senha !== "1122") {
    erro.textContent = "Nome, email ou senha incorretos!";
    return;
  }

  document.getElementById("login-container").style.display = "none";
  document.getElementById("painel-container").style.display = "block";

  // Contador de usuários
  contadorUsuarios += 1;
  document.getElementById("contadorUsuarios").textContent = contadorUsuarios;
}

// IA simples: calcula despesas
function calcularDespesas() {
  const venda = parseFloat(document.getElementById("venda").value) || 0;
  const funcionarios =
    parseFloat(document.getElementById("funcionarios").value) || 0;
  const salario = parseFloat(document.getElementById("salario").value) || 0;

  const totalDespesas = funcionarios * salario;
  const lucro = venda - totalDespesas;

  document.getElementById(
    "resultado"
  ).textContent = `💰 Total de despesas: R$${totalDespesas.toFixed(
    2
  )} | Lucro: R$${lucro.toFixed(2)}`;
}

// BLOCO DE NOTAS
function toggleBlocoNotas() {
  const container = document.getElementById("blocoNotasContainer");
  container.style.display =
    container.style.display === "none" ? "block" : "none";
}

function salvarNota() {
  const nota = document.getElementById("blocoNotas").value;
  if (nota.trim() === "") {
    document.getElementById("statusNota").textContent =
      "Digite algo antes de salvar!";
    return;
  }
  localStorage.setItem("blocoNotas", nota);
  document.getElementById("statusNota").textContent = "✅ Nota salva!";
}

window.onload = () => {
  const nota = localStorage.getItem("blocoNotas");
  if (nota) document.getElementById("blocoNotas").value = nota;
  document.getElementById("saldo").textContent = saldo;
};

// BANCO VIRTUAL
function adicionarBanco() {
  const valor = parseFloat(document.getElementById("valorBanco").value) || 0;
  if (valor <= 0) return;
  saldo += valor;
  document.getElementById("saldo").textContent = saldo.toFixed(2);
}

function retirarBanco() {
  const valor = parseFloat(document.getElementById("valorBanco").value) || 0;
  if (valor <= 0 || valor > saldo) return;
  saldo -= valor;
  document.getElementById("saldo").textContent = saldo.toFixed(2);
}
