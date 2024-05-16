// import { TextField } from "@consta/uikit/TextField";
// import {Button} from '@consta/uikit/Button'
import { useState } from "react";
import { Layout } from "@consta/uikit/Layout";
import {FileField} from '@consta/uikit/FileField'
// import {Text} from '@consta/uikit/Text' CONSTA
import { FaPaperclip } from "react-icons/fa6";
import TaskTabs from './TaskTabs';
import axios from "axios";

export default function CreateTask({handleClick, setType, type}){
    const [taskContent, setTaskContent] = useState('')
    const number = '79991309576'
    const username = ''


    const handleSubmit = () => {
        if (taskContent.trim() !== '') {
            if (type === 'whatsapp') {
                axios.post(`https://wappi.pro/api/sync/message/send?profile_id=${'588de407-339c'}`, 
                  {
                    body: taskContent,
                    recipient: number
                  },
                  {
                    headers: {
                      'Authorization': 'a619051fed17a059b8c63cc4128c9a15e7a2632d',
                      'Content-Type': 'application/json'
                    }
                  }
                )
                .then(response => {
                  console.log('Сообщение отправлено успешно:', response.data);
                  handleClick(taskContent);  // Далее обработка, если нужно
                })
                .catch(error => {
                  console.error('Ошибка при отправке сообщения:', error);
                });
            }
            else if(type === 'tg') {
                axios.post(`https://wappi.pro/tapi/sync/message/send?profile_id=${'27a15f36-ba3a'}`, 
                  {
                    body: taskContent,
                    recipient: number
                  },
                  {
                    headers: {
                      'Authorization': 'a619051fed17a059b8c63cc4128c9a15e7a2632d',
                      'Content-Type': 'application/json'
                    }
                  }
                )
                .then(response => {
                  console.log('Сообщение отправлено успешно:', response.data);
                  handleClick(taskContent);  // Далее обработка, если нужно
                })
                .catch(error => {
                  console.error('Ошибка при отправке сообщения:', error);
                });
            }else{
              handleClick(taskContent);
            }
            setTaskContent(''); // Очистка текстового поля после отправки
        }
      };

    return (
        <div className="create-task">
                <TaskTabs setType={setType} type={type}/>
                <textarea 
                placeholder='Напишите ваш комментарий' 
                value={taskContent}
                rows={4}
                name="message"
                onChange={e => setTaskContent(e.target.value)}></textarea>
                
                {/* <TextField
                onClick={toggle}
                value={text}
                onChange={handleChangeText}
                type="textarea"
                rows={open?3:1}
                placeholder="Напишите ваш комментарий"  /> CONSTA */}

                <div className="file-field">
                <FileField>     
                    <FaPaperclip />
                    <span>Прикрепить</span>
                </FileField>
                </div>
                <Layout>
                    <button className="send-btn" onClick={() => handleSubmit()}>Отправить</button>
                    <button className="send-btn">Отмена</button>
                    {/* <Button label='Отмена' view="clear"/>  CONSTA*/}
                </Layout>
        </div>
        
    )
}