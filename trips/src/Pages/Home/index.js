import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addReserve} from '../../store/models/reserve/actions'
import {MdFlightTakeoff} from 'react-icons/md'
import api from '../../Services/api'

import './styles.css'

export default function Home() {
  const dispatch = useDispatch()
  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function loadAPI(){
      const response = await api.get('/trips')
      setTrips(response.data)

      console.log(response.data)
    }

    loadAPI()
  },[])

  function handleAdd(trip){
    dispatch(addReserve(trip))
  }

  return (
    <div>
      <div className="box">
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title}/>
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponivél' : 'Indisponivél'}</span>

            <button
            type="button"
            onClick={() => handleAdd(trip)}
            >
              <div>
                <MdFlightTakeoff size={16} color="#fff"/>
              </div>
            </button>
            <span>SOLICITAR RESERVA</span>
          </li>
        ))}
      </div>
    </div>
  )
}