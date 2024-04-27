import {Tabs} from '@consta/uikit/Tabs'
import { useState } from 'react'

export default function OwnTabs({items}){
    const getItemLabel = (label) => label
    const [value, setValue] = useState(items[0])
    return(
        <Tabs
        value={value}
        onChange={setValue}
        items={items}
        getItemLabel={getItemLabel} />
    )
}