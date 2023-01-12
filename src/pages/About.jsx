import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About(){

    const [user,setUser] = useState('mario')

    if(!user){
        return <Navigate to={"/"} replace={true} />
    }

    return(
        <div className="about">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi nobis impedit et ut deserunt doloribus nihil voluptas repellat quae. Deserunt necessitatibus impedit expedita asperiores dolor blanditiis vitae maiores corporis alias voluptates fugiat, animi nihil harum. Pariatur sit inventore itaque, debitis natus facere corporis, odio atque suscipit ipsa repudiandae ducimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi nobis impedit et ut deserunt doloribus nihil voluptas repellat quae. Deserunt necessitatibus impedit expedita asperiores dolor blanditiis vitae maiores corporis alias voluptates fugiat, animi nihil harum. Pariatur sit inventore itaque, debitis natus facere corporis, odio atque suscipit ipsa repudiandae ducimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi nobis impedit et ut deserunt doloribus nihil voluptas repellat quae. Deserunt necessitatibus impedit expedita asperiores dolor blanditiis vitae maiores corporis alias voluptates fugiat, animi nihil harum. Pariatur sit inventore itaque, debitis natus facere corporis, odio atque suscipit ipsa repudiandae ducimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi nobis impedit et ut deserunt doloribus nihil voluptas repellat quae. Deserunt necessitatibus impedit expedita asperiores dolor blanditiis vitae maiores corporis alias voluptates fugiat, animi nihil harum. Pariatur sit inventore itaque, debitis natus facere corporis, odio atque suscipit ipsa repudiandae ducimus.</p>

            <button onClick={()=>setUser(null)}>Log Out</button>
        </div>
    )
}