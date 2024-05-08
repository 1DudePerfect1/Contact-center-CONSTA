import {Combobox} from '@consta/uikit/Combobox'
import { useState } from 'react'

export default function CompanyCombobox({list, deal, label, placeholder}){
    const [value, setValue] = useState({label: deal})
    return (
        <>
            <Combobox
            label={label}
            value={value}
            placeholder={placeholder}
            onChange={setValue}
            items={list}  />
        </>    
    )
}