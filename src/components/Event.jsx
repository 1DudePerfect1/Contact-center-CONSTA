import { LuCalendarClock } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import {Text} from '@consta/uikit/Text'

export default function Event({event}){
    let code
    const messagePersonCode = (
        <>
            <Text>{event.message}</Text>
            <Text view="secondary" size="s">Ответственный {event.person}</Text>
        </>
    )
    if (event.type === "meeting") {
        code = (
            <>
            <span>
                <LuCalendarClock /> 
                Запланировання встреча
            </span>
            {messagePersonCode}
            </>
        )
    }else if(event.type === "task"){
        code = (<>
            <span>
                <FaClipboardList />
                Задача
            </span>
            {messagePersonCode}
        </>)
    }else if(event.type === "comment"){
        code = (<>
            <span>
                <BiSolidCommentDetail />
                Комментарий
            </span>
            {messagePersonCode}
        </>)
    }else if(event.type === "comment"){
        code = (<>
            <span>
                <BiSolidCommentDetail />
                Комментарий
            </span>
            {messagePersonCode}
        </>)
    }else if(event.type === "whatsapp"){
        code = (<>
            <span>
                <FaWhatsapp />
                Сообщение в WhatsApp
            </span>
            {messagePersonCode}
        </>)
    }
    return (
        <div style={{marginTop: '5px', padding: '5px'}}>
            {code}
        </div>
            

    )
}