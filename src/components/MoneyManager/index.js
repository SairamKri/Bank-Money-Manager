import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionList: updatedTransactionList})
  }

  onClickFormElement = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeInput = event => {
    this.setState({optionId: event.target.value})
  }

  getIncomeAmount = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      }
    })
    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expensesAmount += each.amount
      }
    })
    return expensesAmount
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      } else {
        expensesAmount += each.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, transactionList, optionId} = this.state
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
    const balanceAmount = this.getBalanceAmount()
    return (
      <div className="main-container">
        <div className="profile-details-container">
          <h1 className="profile-name">Hi,Richard</h1>
          <p className="profile-card-greetings">
            Welcome back to your
            <span className="bank-name"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
          balanceAmount={balanceAmount}
        />
        <div className="bottom-transaction-history-container">
          <div className="add-transaction-container">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <form className="form-container" onSubmit={this.onClickFormElement}>
              <label className="input-label" htmlFor="title-input">
                TITLE
              </label>
              <input
                type="text"
                className="input-element"
                id="title-input"
                value={titleInput}
                placeholder="TITLE"
                onChange={this.onChangeTitleInput}
              />
              <label className="input-label" htmlFor="amount-input">
                AMOUNT
              </label>
              <input
                type="number"
                className="input-element"
                id="amount-input"
                value={amountInput}
                placeholder="AMOUNT"
                onChange={this.onChangeAmountInput}
              />
              <label className="input-label" htmlFor="select-input">
                TYPE
              </label>
              <select
                id="select-input"
                className="input-element"
                value={optionId}
                onChange={this.onChangeTypeInput}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="history-sub-heading">Title</p>
                  <p className="history-sub-heading">Amount</p>
                  <p className="history-sub-heading">Type</p>
                </li>
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    transactionDetails={eachTransaction}
                    key={eachTransaction.id}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
