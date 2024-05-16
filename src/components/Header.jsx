import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export const Header = ({name}) => {
  return (
    <div className="header">
        <IoIosArrowBack />
        <h2>{name}</h2>
        {/* <Button label="Редактировать" width='163px'/>
        <Button label="Удалить" width='163px' /> */}
        <button className='btn-header'>Редактировать</button>
        <button className='btn-header'><FaTrashAlt />Удалить</button>
      </div>
  )
}
