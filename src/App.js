import './App.css';
import React from 'react';
import Expenses from './SubComponent/Expenses/Expenses';
function App(){
    let expenses = [
        { 
            id: 'e1',
            title: 'school fee',
            amount: 2000,
            date: new Date(2023, 5, 25) 
        },
        { 
            id: 'e2',
            title: 'home rent',
            amount: 6000,
            date: new Date(2023, 6, 10) 
        },
        { 
            id: 'e3',
            title: 'food',
            amount: 4000,
            date: new Date(2023, 7, 25) 
        },
        { 
            id: 'e4',
            title: 'electricity bill',
            amount: 2500,
            date: new Date(2023, 8, 25) 
        }
    ];
    return(
        <div>
            <h2 className="heading">DAILY EXPENSES</h2>
            <Expenses item={expenses}/>
        </div>
    );
}
export default App;