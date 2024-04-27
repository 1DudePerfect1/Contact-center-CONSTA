import OwnTabs from './OwnTabs';
import {Layout} from '@consta/uikit/Layout'
import {Grid, GridItem} from '@consta/uikit/Grid'
import Deal from './Deal';
import CreateTask from './CreateTask';
import History from './History';
import { useRef } from 'react';
import { FaRoad } from 'react-icons/fa6';

export default function App() {
  const companyList = contracts.map(item => {return ({id: item.id, label: item.company})})
  const directionList = contracts.map(item => {return ({id: item.id, label: item.direction})})
  const stageList = contracts.map(item => {return ({id: item.id, label: item.stage})})
  const agentList = contracts.map(item => {return ({id: item.id, label: item.agent, subLabel: 'sobaka@gmail.com'})})
  const contactsList = contracts.map(item => {return ({id: item.id, label: item.contacts, subLabel: 'koshka@gmail.com'})})

  const scrollContainerRef = useRef(null);
  const fixedRef = useRef(null);
  
  return (
    <>
      <OwnTabs items={['Основное','История изменений']}/>
        <Layout>
          <Grid>
            <GridItem>
              <Deal 
              deal={contracts[0]}
              companyList={companyList}
              directionList={directionList}
              stageList={stageList}
              agentList={agentList}
              contactsList={contactsList}  />
            </GridItem>
            
          </Grid> 
          

            
          <Layout flex = {1} direction='column'>
            <Layout flex={1}>
              <CreateTask/>
            </Layout>
            <Layout flex={2.35}>
              <History events={contracts[0].events}/>  
            </Layout>
          </Layout>
       </Layout>
    </>
      
      
  );
}

const contracts = [
  {
    id: 1,
    company: "ПАО АНК БАШНЕФТЬ",
    amount: 2000000,
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
          person: "Алексей Петров"
      },
      {
          id: 1,
          type: "task",
          message: "Составить пакет документов для Ивана Иванова",
          person: "Алексей Петров"
      },
      {
          id: 3,
          type: "comment",
          message: "Договорились о сделке, необходимы документы и встреча",
          person: "Алексей Петров"
      },
      {
          id: 4,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов"
      },
      {
          id: 5,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов"
      },
      {
          id: 6,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов"
      },
      {
          id: 7,
          type: "comment",
          message: "Договорились о сделке, необходимы документы и встреча",
          person: "Алексей Петров"
      },
      {
          id: 8,
          type: "task",
          message: "Составить пакет документов для Ивана Иванова",
          person: "Алексей Петров"
      }
    ] 
  },
  {
    id: 2,
    company: "ПАО ТАТНЕФТЬ",
    amount: "500000 тенге",
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
          person: "Алексей Петров"
      },
      {
          id: 2,
          type: "task",
          message: "Составить пакет документов для Ивана Иванова",
          person: "Алексей Петров"
      },
      {
          id: 3,
          type: "comment",
          message: "Договорились о сделке, необходимы документы и встреча",
          person: "Алексей Петров"
      },
      {
          id: 4,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов"
      },
      {
          id: 5,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов"
      },
      {
          id: 6,
          type: "whatsapp",
          message: "Здравствуйте, отправляю реквизиты для сделки",
          person: "Иван Иванов"
      }
    ] 
  },
  {
    id: 3,
    company: "ООО Рога и копыта",
    amount: "500 лир",
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
          person: "Алексей Петров"
      },
      {
          id: 1,
          type: "task",
                message: "Купить продукты питания для скота",
                person: "Алексей Петров"
            },
            {
                id: 3,
                type: "comment",
                message: "Договорились о сделке, необходимы документы и встреча",
                person: "Алексей Петров"
            },
            {
                id: 4,
                type: "whatsapp",
                message: "Здравствуйте, хотел бы сделать заказ копыт",
                person: "Иван Иванов"
            },
            {
                id: 5,
                type: "whatsapp",
                message: "Здравствуйте, отправляю реквизиты для сделки",
                person: "Иван Иванов"
            },
            {
                id: 6,
                type: "whatsapp",
                message: "Здравствуйте, отправляю реквизиты для сделки",
                person: "Иван Иванов"
            },
            {
                id: 7,
                type: "comment",
                message: "Договорились о сделке, необходимы документы и встреча",
                person: "Алексей Петров"
            },
            {
                id: 8,
                type: "task",
                message: "Составить пакет документов для Ивана Иванова",
                person: "Алексей Петров"
            }
          ] 
  }
]
