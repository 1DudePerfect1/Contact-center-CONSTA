import { useState } from "react"
import { TextField } from '@consta/uikit/TextField'

export default function OwnTextField({label, type, placeholder, incrementButtons, deal, isDisabled}){
    const [amount, setAmount] = useState(deal)
    function handleChangeAmount(amount){
        setAmount(amount)
    }
    return(
        <>
            <TextField
            label={label}
            type={type}
            value={amount}
            placeholder={placeholder}
            onChange={handleChangeAmount}
            incrementButtons={incrementButtons}
            disabled={isDisabled} />
        </>
        
    )
}