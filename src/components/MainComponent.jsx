import React from 'react'
import HeadTabs from './HeadTabs';
import Deal from './Deal';
import CreateTask from './CreateTask';
import History from './History';
import {Theme, presetGpnDefault} from '@consta/uikit/Theme'
import { Fragment } from 'react';
import { Header } from './Header';
import { useEffect, useState } from 'react';



export default function MainComponent({contract, companyList, directionList, stageList, agentList, contactsList}){
    const [type, setType] = useState('comment');
    const [events,setEvents] = useState(contract.events)

 
    const handleClickSubmit = (message) => {
        console.log(events)
        setEvents(prevEvents => [
        ...prevEvents,
        {id: prevEvents.length + 1, type: type, message: message, person: "Ildar Suleymanov", date: new Date()}
        ]
        )
    }
    useEffect(() => {
        console.log('as')
    }, [events])
  return (
    <Fragment>
      <Header name={contract.name}/>
      <HeadTabs/>
        <div className='main'>
      {/* <Grid 
      cols={1} 
      breakpoints={{
          640: {
            cols: 10,
          },
        }}> CONSTA*/}

          {/* <GridItem 
          col={1}
          breakpoints={{
              640: {
                col: 4,
                row: 2,
              },
            }}
          > CONSTA*/}
          <div className="deal-section">    
              <Theme preset={presetGpnDefault}>
                  <Deal 
                  deal={contract}
                  companyList={companyList}
                  directionList={directionList}
                  stageList={stageList}
                  agentList={agentList}
                  contactsList={contactsList}  />
                </Theme>
          </div>    
          {/* </GridItem> */}
          
          {/* <GridItem
          col={1}
          breakpoints={{
              640: {
                col: 6,
              },
            }} 
          > */}
                  <CreateTask
                  handleClick={handleClickSubmit}
                  setType={setType}
                  type={type}
                  />
          {/* </GridItem> */}

          {/* <GridItem 
          col={1}
          colStart={1}
          breakpoints={{
              640: {
                col: 6,
                colStart: 5,
              },
            }}> */}
              <div className="events">
                  <History events={events}/> 
              </div>
          {/* </GridItem>
      </Grid> */}
      </div>
    </Fragment>
  )
}