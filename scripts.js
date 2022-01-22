const Modal = {
    open() {
      //Abrir Modal
      // Adicionar a class active no modal
      document.querySelector('.modal-overlay').classList.add('active');
    },
    close(){
      //Fechar modal
      //Remover a class active do modal
      document.querySelector('.modal-overlay').classList.remove('active')
    }
  }

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021'
    },
    {
        id: 1,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    },
]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    total() {
        //entradas - saídas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('data-table tbody'),

    addTransaction(transaction, index) {
        console.log(transaction)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.expense}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        </tr>
        `
        return html
    }
}

DOM.addTransaction(transactions[0])