import React, {useState, useEffect} from 'react'
import api from '../../Services/api'

export default function Home() {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function loadAPI(){
      const response = await api.get('/trips')
      setTrips(response.data)

      console.log(response.data)
    }

    loadAPI()
  },[])

  return (
    <div>

    </div>
  )
}