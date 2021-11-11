import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Checkbox, Form } from 'semantic-ui-react'



const TransactionForm= () =>{
    const [transaction, setTransaction] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async ( data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
        const response = await fetch(['http://127.0.0.1:8000/calc/post/'], requestOptions);
        const jsonData = await response.json();
    
        console.log(jsonData);
    }
    
    
    return (
        <div style={{textAlign: "center "}}>
            {transaction.map(data =>{
                return (
                    <div key={data.id}> 
                    <form onSubmit = {onSubmit}>
                        {/* <input onChange={(e) => {e.target.value}} */}
                        <input value={data.chp_reference} placeholder="chp_reference"/>
                        <input value={data.property_market_rent} placeholder="property_market_rent"/>
                        </form>
                        
                    </div>
                )
            })}
            
            
        </div>
    )
}

export default TransactionForm;
