import React, { useState } from 'react'

import "./address.scss"
import { useNavigate } from 'react-router-dom'

const Address = ({ setIsModalOpen, setAddress}) => {
    const [newAddress, setNewAddress] = useState("")
    const onClose = () => {
        setAddress(newAddress)
        setIsModalOpen(false)
    }


  return (
    <div className='address'>
      <input type="text" placeholder='Enter new address'onChange={(e) => setNewAddress(e.target.value)} />
      <div className='buttons'>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        <button onClick={onClose}>Save Address</button>
      </div>
    </div>
  )
}

export default Address
