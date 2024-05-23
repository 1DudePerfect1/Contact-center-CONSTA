import {Combobox} from '@consta/uikit/Combobox'
import { useState } from 'react'

export default function CompanyCombobox({list, deal, label, placeholder,tst}){
    const [value, setValue] = useState({label: deal})
    function handleChangeValue(e){
        setValue(e)
        tst()
    }
    return (
        <>
            <Combobox
            label={label}
            value={value}
            placeholder={placeholder}
            onChange={handleChangeValue}
            items={list}  />
        </>    
    )
}