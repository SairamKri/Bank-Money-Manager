// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, balanceAmount, expensesAmount} = props
  return (
    <div className="money-dashboard-container">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div className="balance-display-container">
          <p className="your-balance-text">Your Balance</p>
          <p className="balance-amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="your-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div className="balance-display-container">
          <p className="your-balance-text">Your Income</p>
          <p className="balance-amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="your-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div className="balance-display-container">
          <p className="your-balance-text">Your Expenses</p>
          <p className="balance-amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
