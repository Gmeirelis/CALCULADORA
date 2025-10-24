function adicionar(valor) {
      document.getElementById('resultado').value += valor;
    }

    function calcular() {
      const conta = document.getElementById('resultado').value;
      try {
        document.getElementById('resultado').value = eval(conta);
      } catch {
        document.getElementById('resultado').value = 'Erro';
      }
    }

    function limpar() {
      document.getElementById('resultado').value = '';
    }