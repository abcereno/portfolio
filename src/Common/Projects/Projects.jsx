import React from 'react'
import "./Projects.css";
import data from "../../Assets/data.js";
const Projects = () => {
    return (
        <>
            <ul class="list-unstyled gallery">
                {data.map((list) => (
                    <li key={list.id}>
                        <figure  style={{ "--delay": `${list.id}s` }} className='project-slide-in-bck-bottom'>
                            <a href={list.link}><img src={list.path} alt={list.name}/></a>
                            <figcaption>
                                <main>
                                    <p>{list.title}</p>
                                </main>
                                <footer>
                                    <div>
                                        <p>{list.description}</p>
                                    </div>
                                </footer>
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Projects