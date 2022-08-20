import axios from 'axios';

const BACKEND_URL = 'https://expense-app-f56d0-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
}

// https://expense-app-f56d0-default-rtdb.firebaseio.com/  after firebaseio.com
//  it represents folder which is reflect in database and data store
// in this folder in fireBase and here "expenses.json" reprsents this foler


export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');
  const expenses = [];

//   console.log(
//     'respone.data======================',
//     response.data,
//   );

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id,expenseData){
    return axios.put(BACKEND_URL+`/expenses/${id}.json`,expenseData)
};

export function deleteExpense(id) {
    return axios.delete(BACKEND_URL+`/expenses/${id}.json`);
};
