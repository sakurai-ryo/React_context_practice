import React, { useEffect, useState, useContext } from 'react'
import { Store } from '../../store/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom'
import Style from './Header.module.scss'

const Header = () => {

  const [term, setTerm] = useState('')
  const history = useHistory()
  const { globalState, setGlobalState } = useContext(Store)

  const doSearch = async (e) => {
    e.preventDefault()
    const params = {
      type: 'SET_TERM',
      payload: {
        term
      }
    }
    setGlobalState(params)
    history.push(`/search?query=${term}`)
  }

  useEffect(() => {
    setTerm(globalState.term)
  },[])

  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={ doSearch }>
         <input type="text" placeholder="検索" onChange={e => setTerm(e.target.value)} value={term}/>
         <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  )
}

export default Header
