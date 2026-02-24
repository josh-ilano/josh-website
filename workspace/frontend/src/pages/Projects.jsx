import Project from "../components/project/project"

export default function ProjectsPage() {

    return <div className="glass">
                <div className="innerContainer">
                    <h2>Projects</h2>
                    <Project
                        name="Projectile System" 
                        description="A modular Luau-based projectile framework supporting dynamically tracked projectiles between moving instances.
                                    Implements staged VFX orchestration (Cast → Projectile → Impact) and constant-speed motion
                                    along 3D Bezier curves (Linear to Quartic) using recursive arc-length approximation." 
                        github="https://github.com/josh-ilano/projectile-controller"/>

                    <Project
                        name="Elite Footballers Tournament (EFT)" 
                        description="A website developed during my time at Hack4Impact for the nonprofit organization, Elite Footballers Tournament. The website
                                    hosts a platform for recruiters, coaches, and players to interact. Coaches can publish tournaments and players
                                    can also sign up for these tournaments. Players' profiles are publicly viewable/searchable as they are all stored in Supabase." 
                        github="https://github.com/timmyjr11/eft"
                        display="eft"/>
                    
                </div>
    </div> 
}