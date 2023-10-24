// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDeleteButton = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="each-transactionItem-container">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">RS {amount}</p>
      <p className="transaction-text">{type}</p>
      <button
        className="transaction-delete-button"
        type="button"
        onClick={onClickDeleteButton}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
