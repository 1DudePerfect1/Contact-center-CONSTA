import { LuCalendarClock } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
export default function Event({event, myDate}){
    function codeFunc(eventType, eventDate, eventMessage, eventPerson){
        return (
            <>
                <span>
                    {eventType==='meeting'?<div><LuCalendarClock/></div>:null}
                    {event.type === "comment"?<div><BiSolidCommentDetail/></div>:null}
                    {event.type === "whatsapp"?<div className="whats-app"><FaWhatsapp /></div>:null}
                    {event.type === "task"?<div><FaClipboardList/></div>:null}
                    {event.type === "tg"?<div className="tg"><FaTelegramPlane/></div>:null}
                    <p className="event-type">
                        {eventType==='meeting'? ('Запланированная встреча'):null}
                        {eventType==='comment'? ('Комментарий'):null}
                        {eventType==='whatsapp'? ('Сообщение в WhatsApp'):null}
                        {eventType==='task'? ('Задача'):null}
                        {eventType==='tg'? ('Сообщение в Telegram'):null}
                    </p>
                    <p className="event-date">{myDate(eventDate)}</p>
                </span>
                <p className="event-message">{eventMessage}</p>
                <p className="event-person">Ответственный {eventPerson}</p>
            </>
        )
    }
    return (
        <div>
            {codeFunc(event.type, event.date, event.message, event.person )}
        </div>
            

    )
}