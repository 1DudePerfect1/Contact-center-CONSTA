import { useState } from "react"
import {UserSelect} from '@consta/uikit/UserSelect'

export default function OwnUserSelect({label, placeholder, items, deal,tst}){
    const [value, setValue] = useState({label: deal})
    function handleChangeValue(e){
        setValue(e)
        tst()
    }
    return(
        <>
            <UserSelect
            label={label}
            placeholder={placeholder}
            items={items}
            value={value}
            onChange={handleChangeValue} />
        </>
    )
}