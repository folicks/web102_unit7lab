import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) =>  {
  const [speed, setSpeed] = useState(props.speed || 0)

  const updateSpeed = async (event) => {
    event.preventDefault()
    const newSpeed = speed + 1

    const { data, error } = await supabase
      .from('Crewmates')
      .update({ speed: newSpeed })
      .eq('id', props.id)
      .select()

    if (error) {
      console.error("Error updating speed:", error)
    } else {
      setSpeed(newSpeed)
    }
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <Link to={'crewmate/'+ props.id}>
            <h2 className="title">{props.name}</h2>
          </Link>
          <h3 className="specialty">{props.specialty}</h3>
          <div className="stats">
            <p className="color">Color: {props.color}</p>
            <p className="speed">Speed: {speed}</p>
          </div>
          <button className="speedButton" onClick={updateSpeed}>🏃 Increase Speed</button>
      </div>
  );
};

export default Card