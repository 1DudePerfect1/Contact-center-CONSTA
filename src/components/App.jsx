import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Grid, GridItem} from '@consta/uikit/Grid'
// import {myPresset} from '@consta/uikit/Theme'
import MainComponent from './MainComponent';
import axios from 'axios';
export default function App() {
  const companyList = contracts.map(item => {return ({id: item.id, label: item.company})})
  const directionList = contracts.map(item => {return ({id: item.id, label: item.direction})})
  const stageList = contracts.map(item => {return ({id: item.id, label: item.stage})})
  const agentList = contracts.map(item => {return ({id: item.id, label: item.agent, subLabel: 'sobaka@gmail.com'})})
  const contactsList = contracts.map(item => {return ({id: item.id, label: item.contacts, subLabel: 'koshka@gmail.com'})})
  const [deals, setDeals] = useState(null)
  const [incident, setIncident] = useState(null)

  useEffect(()=> {
      axios.get(`http://localhost:5000/deals`)
      .then((response) => {
        setDeals(response.data) 
      })
      .catch((err)=> {
        console.log(err)
      })

      axios.get(`http://localhost:5000/events/2`)
      .then((response) => {
        setIncident(response.data) 
      })
      .catch((err)=> {
        console.log(err)
      })
  },[setDeals, setIncident])
  console.log(deals)
  console.log(incident)
  
  // function setDeals(data){
  //   setData(
  //     data.map((el) => 
  //       contracts = [
  //         { id: el.id,
  //           name: el.name,
  //           company: el.companyName,
  //           amount: el.amount,
  //           curr: el.curr,
  //           direction: el.direction,
  //           stage: el.stage,
  //           numberContract: el.numberContract,
  //           agent: el.repName,
  //           contacts: el.contacts,
  //           date: el.date}
  //       ]
  //     )
  //   )
  // }
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><span>Укажите путь</span></>}/>
        {contracts.map((el) => 
        
        <Route key={el.id} path={"/" + el.id}  element={
        <MainComponent 
          contract={el}
          companyList={companyList}
          directionList={directionList}
          stageList={stageList}
          agentList={agentList}
          contactsList={contactsList}/>}/>
        )}
      </Routes>          
    </BrowserRouter>

    </>
  );
}

const contracts = [
  {
    id: 1,
    name: 'Покупка оборудования для обработки ископаемых',
    company: "ПАО АНК БАШНЕФТЬ",
    amount: 2000000,
    curr: "Тенге",
    direction: "Продажа ископаемых",
    stage: "Не обработан",
    numberContract: "3342164",
    agent: "Иванов Иван",
    contacts: "Петров Пётр",
    date: new Date("2017-01-26"),
    events: [
      {
          id: 2,
          type: "meeting",
          message: "18:00, ул. Трамвайная д.5, оф.315",
          person: "Алексей Петров",
          date: new Date("2020-09-29 08:00")
      },
      {
          id: 1,
          type: "task",
          message: "Составить пакет документов для Ивана Иванова",
          person: "Алексей Петров",
          date: new Date("2024-05-06 08:00")
      },
      {
          id: 3,
          type: "comment",
          message: "Договорились о сделке, необходимы документы и встреча",
          person: "Алексей Петров",
          date: new Date("2020-09-07 08:00")
      },
      {
          id: 4,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов",
          date: new Date("2020-09-13 08:00")
      },
      {
          id: 5,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов",
          date: new Date("2020-09-21 08:00")
      },
      {
          id: 6,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов",
          date: new Date("2020-10-01 08:00")
      },
      {
          id: 7,
          type: "comment",
          message: "Договорились о сделке, необходимы документы и встреча",
          person: "Алексей Петров",
          date: new Date("2020-09-25 08:00")
      },
      {
          id: 8,
          type: "task",
          message: "Составить пакет документов для Ивана Иванова",
          person: "Алексей Петров",
          date: new Date("2020-09-29 08:00")
      }
    ] 
  },
  {
    id: 2,
    name: 'Оказание логистических услуг',
    company: "ПАО ТАТНЕФТЬ",
    amount: 500000,
    curr: "Рубль",
    direction: "Климатические проекты",
    stage: "Не обработан",
    numberContract: "839571",
    agent: "Радмир Минигалеев",
    contacts: "Алсу Баймурзина",
    date: new Date("2024-03-07"),
    events: [
      {
          id: 2,
          type: "meeting",
          message: "18:00, ул. Трамвайная д.5, оф.315",
          person: "Алексей Петров",
          date: new Date("2002-02-16 14:15")
      },
      {
          id: 1,
          type: "task",
          message: "Составить пакет документов для Ивана Иванова",
          person: "Алексей Петров",
          date: new Date("2002-02-01 14:15")
      },
      {
        id: 7,
        type: "tg",
        message: "Привет",
        person: "Регина Минигалеева",
        date: new Date("2024-05-16 14:15")
    },
      {
          id: 3,
          type: "comment",
          message: "Договорились о сделке, необходимы документы и встреча",
          person: "Алексей Петров",
          date: new Date("2002-02-01 14:15")
      },
      {
          id: 4,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов",
          date: new Date("2002-02-01 14:15")
      },
      {
          id: 5,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов",
          date: new Date("2002-02-01 14:15")
      },
      {
          id: 6,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов",
          date: new Date("2002-02-01 14:15")
      }
    ] 
  },
  {
    id: 3,
    name: 'Организация транспортировки',
    company: "ООО Рога и копыта",
    amount: 500,
    curr: "Доллар",
    direction: "Производство продуктов",
    stage: "Обработан",
    numberContract: "7658401",
    agent: "Ильдар Сулейманов",
    contacts: "Ильдар Сулейманов",
    date: new Date("2020-09-01"),
    events: [
        {
            id: 2,
            type: "meeting",
            message: "18:00, ул. Трамвайная д.5, оф.315",
            person: "Алексей Петров",
            date: new Date("2002-01-04 00:00")
        },
        {
            id: 1,
            type: "task",
            message: "Купить продукты питания для скота",
            person: "Алексей Петров",
            date: new Date("2002-01-04 00:00")
        },
        {
            id: 3,
            type: "comment",
            message: "Договорились о сделке, необходимы документы и встреча",
            person: "Алексей Петров",
            date: new Date("2002-01-04 00:00")
        },
        {
            id: 4,
            type: "whatsapp",
            message: "Здравствуйте, хотел бы сделать заказ копыт",
            person: "Иван Иванов",
            date: new Date("2002-01-04 00:00")
        },
        {
            id: 5,
            type: "whatsapp",
            message: "Здравствуйте, отправляю реквизиты для сделки",
            person: "Иван Иванов",
            date: new Date("2002-01-04 00:00")
        },
        {
            id: 6,
            type: "whatsapp",
            message: "Здравствуйте, отправляю реквизиты для сделки",
            person: "Иван Иванов",
            date: new Date("2002-01-04 00:00")
        },
        {
            id: 7,
            type: "comment",
            message: "Договорились о сделке, необходимы документы и встреча",
            person: "Алексей Петров",
            date: new Date("2002-01-04 00:00")
        },
        {
            id: 8,
            type: "task",
            message: "Составить пакет документов для Ивана Иванова",
            person: "Алексей Петров",
            date: new Date("2002-01-04 00:00")
        }
          ] 
  }
]
const contract = contracts[1] // выбираем контракт
