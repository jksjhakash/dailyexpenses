import './Expenses.css';
import React from 'react';
import Card from '../ui/Card.js';
import NewExpense from './NewExpense';
import ExpenseItem from './ExpenseItem'; 
function Expenses(props){
    return (
        <Card className="expenses">
            <NewExpense />
            <ExpenseItem 
            date={props.item[0].date} 
            title={props.item[0].title} 
            amount={props.item[0].amount} />
            <ExpenseItem 
            date={props.item[1].date} 
            title={props.item[1].title} 
            amount={props.item[1].amount} />
            <ExpenseItem 
            date={props.item[2].date} 
            title={props.item[2].title} 
            amount={props.item[2].amount} />
            <ExpenseItem 
            date={props.item[3].date} 
            title={props.item[3].title} 
            amount={props.item[3].amount} />
        </Card>
    );

}
export default Expenses;