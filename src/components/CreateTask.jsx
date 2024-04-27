import { TextField } from "@consta/uikit/TextField";
import {Button} from '@consta/uikit/Button'
import OwnTabs from "./OwnTabs";
import { useState } from "react";
import { Layout } from "@consta/uikit/Layout";
import {FileField} from '@consta/uikit/FileField'
import {Text} from '@consta/uikit/Text'
import { FaPaperclip } from "react-icons/fa6";

export default function CreateTask(){
    const [text, setText] = useState(null)
    const handleChangeText = (value) => {
        setText(value)
    }

    return (
        <>

            <Layout direction="column">
                <OwnTabs
                items={['Комментарий', 'Звонок', 'Задача', 'Встреча', 'WhatsApp/Telegram', 'Письмо']}  />

                <TextField
                value={text}
                onChange={handleChangeText}
                type="textarea"
                rows={3}
                placeholder="Напишите ваш комментарий"  />
                <FileField>
                    <FaPaperclip />
                    <Text view="secondary" size="s" lineHeight="m">Нажми меня</Text>
                </FileField>
                <Layout>
                    <Button label='Отправить'/>
                    <Button label='Отмена' view="clear"/>
                </Layout>
            </Layout>
            
        </>
        
    )
}