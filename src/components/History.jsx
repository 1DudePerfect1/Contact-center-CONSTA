import { Layout } from "@consta/uikit/Layout"
import Event from "./Event"

export default function History({events}){

    return (
        <>
            <Layout direction="column" >
                {events.map(el => 
                    <Event
                    event={el}
                    key={el.id}/>
                )}
            </Layout>
            
        </>
    )
}