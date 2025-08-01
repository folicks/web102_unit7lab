import { useState } from 'react'
import { supabase } from '../client'
import './CreatePost.css'

const CreatePost = () => {
    const [crewmate, setCrewmate] = useState({
        name: "", 
        speed: 1, 
        color: "red", 
        specialty: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmate((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createCrewmate = async (event) => {
        event.preventDefault()

        await supabase
            .from('Crewmates')
            .insert({
                name: crewmate.name, 
                speed: crewmate.speed, 
                color: crewmate.color, 
                specialty: crewmate.specialty
            })
            .select()

        window.location = "/"
    }

    return (
        <div className="create-form">
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <select id="color" name="color" onChange={handleChange}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                </select>
                <br/>
                <br/>

                <label htmlFor="specialty">Specialty</label><br />
                <input type="text" id="specialty" name="specialty" onChange={handleChange} />
                <br/>
                <br/>

                <label htmlFor="speed">Initial Speed (1-10)</label><br />
                <input 
                    type="number" 
                    id="speed" 
                    name="speed" 
                    min="1" 
                    max="10" 
                    onChange={handleChange} 
                    value={crewmate.speed}
                />
                <br/>
                <br/>
                
                <input type="submit" value="Create Crewmate" onClick={createCrewmate} />
            </form>
        </div>
    )
}

export default CreatePost