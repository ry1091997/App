import React from 'react';
import {createContext, useReducer} from 'react';

// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     description: 'A pair of Shoes',
//     amount: 59.99,
//     date: new Date('2022-08-16'),
//   },
//   {
//     id: 'e2',
//     description: 'A pair of Trousers',
//     amount: 89.99,
//     date: new Date('2022-07-16'),
//   },
//   {
//     id: 'e3',
//     description: 'Banana',
//     amount: 5.99,
//     date: new Date('2022-08-10'),
//   },
//   {
//     id: 'e4',
//     description: 'Books',
//     amount: 15.99,
//     date: new Date('2022-08-01'),
//   },
//   {
//     id: 'e5',
//     description: 'Another Books',
//     amount: 18.99,
//     date: new Date('2022-06-01'),
//   },
//   {
//     id: 'e6',
//     description: 'A pair of Trousers',
//     amount: 89.99,
//     date: new Date('2022-07-16'),
//   },
//   {
//     id: 'e7',
//     description: 'Banana',
//     amount: 5.99,
//     date: new Date('2022-08-10'),
//   },
//   {
//     id: 'e8',
//     description: 'Books',
//     amount: 15.99,
//     date: new Date('2022-08-01'),
//   },
//   {
//     id: 'e9',
//     description: 'Another Books',
//     amount: 18.99,
//     date: new Date('2022-06-01'),
//   },
// ];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  setExpenses:(expenses)=>{},
  updateExpense: (id, {description, amount, date}) => {},
  deleteExpense: id => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
        const inverted = action.payload.reverse();
        return inverted;  
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        item => item.id == action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
    //   const updatedExpense = [...state];
      state[updatableExpenseIndex] = updatedItem;
    //   return updatedExpense;
    case 'DELETE':
      return state.filter(item => item.id != action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expenseReducer, []);

  function addExpenses(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  function setExpenses(expenses){
    dispatch({type:'SET',payload:expenses});
  }

  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id, expenseData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpenses,
    setExpenses:setExpenses,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
