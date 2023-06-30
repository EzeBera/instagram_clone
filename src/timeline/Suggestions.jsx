import React from 'react'
import './Suggestions.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';

function Suggestions() {
  const user = useSelector(state => state.data.user.user);

  return (
    <div className='suggestions'>
      
      <div className="suggestions__profile">
          <div className="username__left">
            <span className="avatar">
              <Avatar>
                {user.email ? user.email.charAt(0).toUpperCase() : " "}
              </Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Profile</span>
            </div>
          </div>
          <button className="follow__button">Change</button>
        </div>

      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Rigby</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>M</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Mordecai</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>F</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Finn</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>J</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Jake</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>P</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Papaleta</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <br />
        <br />
        <div className='info'>Information • Help • Press • API • Employment • Privacy •<br /> Conditions • Locations • Language • Meta Verified</div>
        <br />
        <div className='copyright'>© 2023 INSTAGRAM FROM META</div>
      </div>
    </div>
  )
}

export default Suggestions