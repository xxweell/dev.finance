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
        let income = 0
        //pega todas as transações
        //para cada transação
        transactions.forEach((transaction) => {
            // se ela for maior que zero
            if(transaction.amount > 0){
                //somar a uma variável e retornar seu valor
                income += transaction.amount
            }
        })
        return income
    },
    expenses() {
        let expense = 0
        //pega todas as transações
        //para cada transação
        transactions.forEach((transaction) => {
            // se ela for menor que zero
            if(transaction.amount < 0){
                //somar a uma variável e retornar seu valor
                expense += transaction.amount
            }
        })
        return expense
    },
    total() {
        return Transaction.incomes + Transaction.expenses
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        console.log(transaction)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? 'income' : 'expense'

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        </tr>
        `
        return html
    },

    updateBalance() {
        document
        .getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.incomes()) 
        document
        .getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document
        .getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.total())
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, '')

        value = Number(value) / 100

        value = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        return signal + value
    }
}

// para adicionar as transações que estão dentro do Array na página
transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})

DOM.updateBalance()