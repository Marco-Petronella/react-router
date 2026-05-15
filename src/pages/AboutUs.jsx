import { useEffect, useState } from "react"

export default function AboutUs() {
    const apiUrl = "https://dragonball-api.com/api/characters?affiliation=Army of Frieza"
    const [team, setTeam] = useState([]);
    
    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
            setTeam(result)
        })
    }, [])
    return(
        <>
        <h1 className="text-center">Il nostro Team: </h1>
        <ul className="row g-4">
        {team.map((member) => (
            <div key={member.id} className="card col-md-6 col-lg-4 ">
              <img src={member.image} className="card-img-top object-fit-fill" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted ">Potere combattivo: {member.ki}-{member.maxKi}</h6>
                <p className="card-text">Razza: {member.race} {member.gender} <br />{member.description}</p>
              </div>
            </div>
        ))}    
        </ul>
        </>
    )
}