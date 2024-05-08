import {DatePicker} from '@consta/uikit/DatePicker'
import { useState } from 'react'
import {Select} from '@consta/uikit/Select'
import OwnTextField from './OwnTextField'
import OwnCombobox from './OwnCombobox'
import OwnUserSelect from './OwnUserSelect'


export default function Deal({deal, companyList, directionList, stageList, agentList, contactsList}){
    const currencyList = [
        {label: 'Рубль', id: 1},
        {label: 'Доллар', id: 2},
        {label:'Лира', id: 3},
        {label: 'Тенге', id: 4},
        {label: 'Манат', id: 5}
    ]
    
    const [date,setDate] = useState(deal.date)
    const [curr, setСurr] = useState(currencyList.find(el => el.label === deal.curr))
    

    

    return(
        <>

            <div className="deal-container">
                <DatePicker
                label='Дата заключения'
                value={date}
                onChange={setDate}  />
            </div>
            
            <div className="deal-container">
                <OwnCombobox
                list={companyList} 
                deal={deal.company} 
                label='Компания'
                placeholder='Выберите компанию'/>
            </div>
            
            <div className="deal-container">

                <OwnTextField
                label='Сумма'
                type='number'
                placeholder='Сумма'
                incrementButtons={false}
                deal={deal.amount}  />

                <Select
                placeholder='Валюта'
                value={curr}
                onChange={setСurr}
                items={currencyList} />

            </div>
            
            <div className="deal-container">
            <OwnCombobox
            list={directionList}
            deal={deal.direction}
            label='Направление'   />
            </div>
            
            <div className="deal-container">
            <OwnCombobox
            list={stageList}
            deal={deal.stage}
            label='Стадия'   />
            </div>
            
            <div className="deal-container">
            <OwnTextField
            label='Номер договора'
            type='number'
            placeholder='123456789'
            incrementButtons={false}
            deal={deal.numberContract}
            isDisabled={false}  />  
            </div>
            
            <div className="deal-container">
            <OwnUserSelect
            label='Представитель'
            placeholder='Выберите представителя'
            items={agentList}
            deal={deal.agent}  /> 
            </div>
            
            <div className="deal-container">
            <OwnUserSelect
            label='Контакты'
            placeholder='Выберите контакт'
            items={contactsList}
            deal={deal.contacts}  /> 
            </div>

        </>
    )
}