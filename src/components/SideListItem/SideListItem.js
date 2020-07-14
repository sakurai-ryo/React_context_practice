import React from 'react'
import Style from './SideListItem.module.scss'
import { Link } from 'react-router-dom'

const SideListItem = ({ id, title, src}) => {
  return (
    <Link className={Style.item} to={{pathname: 'watch', search: `?v=${id}`}}>
      <img src={src} alt={title}/>
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default SideListItem
