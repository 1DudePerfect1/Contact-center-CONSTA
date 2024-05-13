import { Layout } from "@consta/uikit/Layout"
import Event from "./Event"

export default function History({events}){
    events.sort((a,b) => b.date.getTime()-a.date.getTime())
      let titleDateArray =[]
      function myDate(date){
        return date.toLocaleDateString()+' '+ date.toLocaleTimeString().substring(0,5)
      }

      function createTitleDate(date, titleDateArray){
        if(!titleDateArray.includes(date)){
            titleDateArray.unshift(date)
            return <span className="title-date">{date === new Date().toLocaleDateString() ? 'Сегодня': date}</span>
        }
      }
      
    return (
        <>

                {events.map(el => 
                    <>
                        {createTitleDate(el.date.toLocaleDateString(),titleDateArray)}
                        <div className="event">
                            <Event
                            event={el}
                            key={el.id}
                            myDate={myDate}/>
                        </div> 
                    </>                    
                )}
                {console.log(titleDateArray)}
            
        </>
    )
}