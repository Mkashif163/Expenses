
import ExpenseItem from './ExpenseItem'
import Card from './Card'

function Expense(props) {
  return (
    <Card className = 'expenses'>
      {
        props.expenses.map((expense) => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        })
      }
    </Card>
  )
}

export default Expense