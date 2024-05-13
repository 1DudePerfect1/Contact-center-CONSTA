// import { TextField } from "@consta/uikit/TextField";
// import {Button} from '@consta/uikit/Button'
import { useState } from "react";
import { Layout } from "@consta/uikit/Layout";
import {FileField} from '@consta/uikit/FileField'
import {Text} from '@consta/uikit/Text'
import { FaPaperclip } from "react-icons/fa6";
import TaskTabs from './TaskTabs';
import { useRef } from "react";

export default function CreateTask(){
    const [open, setOpen] = useState(false)
    const [text, setText] = useState(null)
    const contentRef = useRef();
    if (contentRef.current) console.log(contentRef.current.scrollHeight);
    const handleChangeText = (value) => {
        setText(value)
    }
    const toggle = () => setOpen(!open) 

    return (
        <div className="create-task">
            <Layout direction="column">
                <TaskTabs/>
                <textarea 
                placeholder='Напишите ваш комментарий' 
                onClick={toggle}
                value={text}></textarea>
                {/* <TextField
                onClick={toggle}
                value={text}
                onChange={handleChangeText}
                type="textarea"
                rows={open?3:1}
                placeholder="Напишите ваш комментарий"  /> CONSTA */}
                <div
                className="content-parent"
                ref={contentRef}
                style={open ? { height: contentRef.current.scrollHeight +"px" } : { height: "0px" }}>
                    <div className="content">
                        <FileField>
                            <FaPaperclip />
                            <Text view="secondary" size="s" lineHeight="m">Нажми меня</Text>
                        </FileField>
                        <Layout>
                            <button className="send-btn">Отправить</button>
                            <button className="send-btn">Отмена</button>
                            {/* <Button label='Отмена' view="clear"/>  CONSTA*/}
                        </Layout>
                    </div>
                </div>
                
            </Layout> 
        </div>
        
    )
}