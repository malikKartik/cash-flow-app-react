import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const splitTypes = [
    {
      value: 'SEIM',
      label: 'Split equally including me',
    },
    {
      value: 'DEEM',
      label: 'Split equally excluding me',
    },
    {
      value: 'SWIM',
      label: 'Split with * including me',
    },
    {
      value: 'SWEM',
      label: 'Split with * excluting me',
    },
  ];
const AddTransactions = () =>{
    const [type, setType] = React.useState('SEIM');

    const handleChange = (event) => {
        setType(event.target.value);
    };
    return(
        <div className="add-transaction">
            <h1>Add transaction</h1>
            <div className="add-trans-form">
                <TextField id="paid-by" className="at-input" label="Paid by" />
                <TextField id="paid-amount" className="at-input" label="Amount" /><br/>
                <TextField
                    id="split-type"
                    className="at-input"
                    select
                    value={type}
                    onChange={handleChange}
                    helperText="Please select the split type"
                    >
                    {splitTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                
            </div>
        </div>
    )
}

export default AddTransactions