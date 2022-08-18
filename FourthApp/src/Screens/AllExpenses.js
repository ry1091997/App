import React, { useContext } from "react";
import ExpensesOutput from "../Components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses(){

    const expensesCtx = useContext(ExpensesContext)

    return<ExpensesOutput expenses={expensesCtx.expenses} expensesPeriodName='Total' fallBack ='No expenses found!!!'/>
}

export default AllExpenses