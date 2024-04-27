import {DatePicker} from '@consta/uikit/DatePicker'
import { useState } from 'react'
import { Layout } from '@consta/uikit/Layout'
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
    const [curr, setСurr] = useState(currencyList[0].label)
    

    

    return(
        <>
            
            {console.log(deal.amount)}
            <DatePicker
            label='Дата заключения'
            value={date}
            onChange={setDate}  />

            <OwnCombobox
            list={companyList} 
            deal={deal.company} 
            label='Компания'
            placeholder='Выберите компанию'/>

            <Layout>
                <OwnTextField
                label='Сумма'
                type='number'
                placeholder='Сумма'
                incrementButtons={false}
                deal={deal.amount}  />

                <Select
                value={curr}
                onChange={setСurr}
                label='_'
                items={currencyList}  />
            </Layout>
            
            <OwnCombobox
            list={directionList}
            deal={deal.direction}
            label='Направление'   />

            <OwnCombobox
            list={stageList}
            deal={deal.stage}
            label='Стадия'   />

            <OwnTextField
            label='Номер договора'
            type='number'
            placeholder='123456789'
            incrementButtons={false}
            deal={deal.numberContract}
            isDisabled={false}  />

            <OwnUserSelect
            label='Представитель'
            placeholder='Выберите представителя'
            items={agentList}
            deal={deal.agent}  />

            <OwnUserSelect
            label='Контакты'
            placeholder='Выберите контакт'
            items={contactsList}
            deal={deal.contacts}  />
        </>
    )
}