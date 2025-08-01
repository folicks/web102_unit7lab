import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'

const ReadPosts = () => {
    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: false })

            if (error) {
                console.error('Error fetching crewmates:', error)
            } else {
                setCrewmates(data)
            }
        }

        fetchCrewmates()
    }, [])
    
    return (
        <div className="ReadPosts">
            {
                crewmates && crewmates.length > 0 ?
                crewmates.map((crewmate) => 
                    <Card 
                        key={crewmate.id}
                        id={crewmate.id} 
                        name={crewmate.name}
                        color={crewmate.color}
                        speed={crewmate.speed}
                        specialty={crewmate.specialty}
                    />
                ) : <h2>{'No Crewmates Yet �'}</h2>
            }
        </div>  
    )
}

export default ReadPosts