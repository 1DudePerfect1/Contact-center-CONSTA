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
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedName, setSelectedName] = useState("");

    const handleSubmit = () => {
        if (taskContent.trim() !== '') {
            if (type === 'whatsapp') {
                axios.post(`https://wappi.pro/api/sync/message/send?profile_id=${'7fbce124-7408'}`, 
                  {
                    body: taskContent,
                    recipient: number
                  },
                  {
                    headers: {
                      'Authorization': '927c41671b49038c3ccfb1de098049cfe6a4195d',
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
                axios.post(`https://wappi.pro/tapi/sync/message/send?profile_id=${'cf91ac3e-0766'}`, 
                  {
                    body: taskContent,
                    recipient: number
                  },
                  {
                    headers: {
                      'Authorization': '927c41671b49038c3ccfb1de098049cfe6a4195d',
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
              setSelectedName('')
            }
            setTaskContent(''); // Очистка текстового поля после отправки
        }
      };
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setSelectedName(file.name); // Сохраняем имя файла
        }
    };
    const textArea = (type) => {
      return (
        type ==='comment' ? 'Напишите ваш комментарий' : '' + 
        type ==='task' ? 'Напишите вашу задачу' : '' + 
        type ==='meeting' ? 'Напишите место и время встречи' : '' + 
        type ==='whatsapp' ? 'Напишите сообщение в WhatsApp' : '' + 
        type ==='tg' ? 'Напишите сообщение в Telegram' : '' 
      )
    }
      
    return (
        <div className="create-task">
                <TaskTabs setType={setType} type={type}/>
                <textarea 
                placeholder={textArea(type)}  
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
                {/* <FileField>     
                    <FaPaperclip />
                    <span>Прикрепить</span>
                </FileField> */}
                <input 
                type="file" 
                id='file-input' 
                className='file'
                onChange={handleFileChange}/>
                <span><label htmlFor="file-input"><FaPaperclip/>Прикрепить</label></span>
                {selectedName && <span >{selectedName}</span>}
                </div>
                <Layout>
                    <button className="send-btn" onClick={() => handleSubmit()}>Отправить</button>
                    <button className="send-btn">Отмена</button>
                    {/* <Button label='Отмена' view="clear"/>  CONSTA*/}
                </Layout>
        </div>
        
    )
}