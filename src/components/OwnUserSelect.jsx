import { useState } from "react"
import {UserSelect} from '@consta/uikit/UserSelect'

export default function OwnUserSelect({label, placeholder, items, deal}){
    const [value, setValue] = useState(deal)
    return(
        <>
            <UserSelect
            label={label}
            placeholder={placeholder}
            items={items}
            value={value}
            onChange={setValue} />
        </>
    )
}