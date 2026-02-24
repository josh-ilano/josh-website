import './project.css'


function Project({name, description, github, display}) {
    return (
 
        <div className="project">
            <h4>{name}</h4>
            <p>{description}</p>
            <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
                <a target="_blank" href={github}><button className="github"> <img className="github-inline" width="20" height ="18" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> GitHub </button></a>


                { display === "eft" &&  (
                    <a target="_blank" href={"https://eft-nu.vercel.app"}><button className="eft"> <img className="eft-inline" width="20" src="eft-logo.png" /> EFT </button></a>
                     )
                }
                
            </div>
            
        </div>

    )
}

export default Project