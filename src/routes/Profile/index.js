import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Checkbox, Container} from "@mui/material"
import { TOGGLE_SHOW_PROFILE } from '../../store/profile'

export const Profile = () => {
  const dispatch = useDispatch()
  const isToggle = useSelector(state => state.isToggle)

  const onChangeStatus = () => {
    dispatch({
      type: TOGGLE_SHOW_PROFILE
    })
  }

  return (
    <Container sx={{pt: 4}}>
      <h1 style={{fontSize: '32px', marginBottom: '30px'}}>Профиль</h1>

      <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
        <Checkbox
          checked={isToggle}
          onChange={onChangeStatus}
          aria-label='Checkbox'
        />
        <label htmlFor="viewProfile">Показать профиль</label>
      </div>



      <div style={{display: 'flex', alignItems: 'center'}}>
        <input
          type="checkbox"
          onChange={onChangeStatus}
          checked={isToggle}
          id="viewProfile"
          style={{marginRight: '8px', width: '20px', height: '20px'}}
        />
        <label htmlFor="viewProfile">Показать профиль</label>
      </div>

    </Container>
  )
}