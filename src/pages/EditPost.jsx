import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import './EditPost.css'

const EditPost = () => {
    const { id } = useParams()
    const [crewmate, setCrewmate] = useState({
        name: "", 
        speed: 1, 
        color: "", 
        specialty: ""
    })

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select()
                .eq('id', id)
                .single()

            if (error) {
                console.error('Error fetching crewmate:', error)
            } else if (data) {
                setCrewmate(data)
            }
        }

        fetchCrewmate()
    }, [id])

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmate((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const updateCrewmate = async (event) => {
        event.preventDefault()

        await supabase
            .from('Crewmates')
            .update({ 
                name: crewmate.name,
                speed: crewmate.speed,
                color: crewmate.color,
                specialty: crewmate.specialty
            })
            .eq('id', id)

        window.location = "/"
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault()

        await supabase
            .from('Crewmates')
            .delete()
            .eq('id', id)

        window.location = "/"
    }

    return (
        <div className="edit-form">
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <select id="color" name="color" value={crewmate.color} onChange={handleChange}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                </select>
                <br/>
                <br/>

                <label htmlFor="specialty">Specialty</label><br />
                <input type="text" id="specialty" name="specialty" value={crewmate.specialty} onChange={handleChange} />
                <br/>
                <br/>

                <label htmlFor="speed">Speed (1-10)</label><br />
                <input 
                    type="number" 
                    id="speed" 
                    name="speed" 
                    min="1" 
                    max="10" 
                    value={crewmate.speed} 
                    onChange={handleChange} 
                />
                <br/>
                <br/>

                <input type="submit" value="Update Crewmate" onClick={updateCrewmate} />
                <button className="deleteButton" onClick={deleteCrewmate}>Delete Crewmate</button>
            </form>
        </div>
    )
}

export default EditPost