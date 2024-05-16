

export default function TaskTabs({setType, type}){
  const getButtonStyle = (buttonType) => ({
    color: type === buttonType ? '#E94C46' : '#00203399',
    borderBottom: type === buttonType ? '1px solid #E94C46' : '1px solid #00426947'
  });
  return (
    
    <div className="tabs">
            <button 
              onClick={() => setType('comment')}
              style={getButtonStyle('comment')}>
            Комментарий</button>
            <button 
            onClick={() => setType('task')}
            style={getButtonStyle('task')}>
            Задача</button>
            <button 
            onClick={() => setType('meeting')}
            style={getButtonStyle('meeting')}>
            Встреча</button>
            <button 
            onClick={() => setType('whatsapp')}
            style={getButtonStyle('whatsapp')}>
            WhatsApp</button>
            <button 
            onClick={() => setType('tg')}
            style={getButtonStyle('tg')}>
            Telegram</button>
        </div>
  )
}

