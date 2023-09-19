import './ExpenseItem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
function ExpenseItem(props){
    let title =props.title;
    const editItem = () => {
        alert("item edited");
        
    }

    const deleteItem = () =>{
        alert("item deleted");
    }    
    
    return (
        <Card className="expense-item">
             <ExpenseDate date={props.date}/>
             <div className="expense-item__description">
                <h2> { title } </h2>
             </div>
             <div className="expense-item__price"> { props.amount }</div>
             <button onClick={ editItem } className="editexpense">Edit</button>
             <button onClick={ deleteItem } className="editexpense">Delete</button>
        </Card>
    );
}
export default ExpenseItem; 