import Experience from "../components/experience/experience"

export default function() {

    return <div className="glass">
            <div className="innerContainer">
                <h2>Experiences</h2>
                <Experience
                    title="Software Developer Intern" 
                    info="AdaptX | Remote" 
                    dates="May 2025 - Aug 2025" 
                    bullets={
                        ["Mapped out user journey on Figma alongside both low- and high-fidelity wireframes consisting of 20 pages.", 
                        "Designed and implemented 20+ accessible mobile UI screens in Expo (React Native) from high-fidelity Figma prototypes.", 
                        "Collaborated in a team of 8 to scrape data from RunSignup API regarding the events of over 100 races in the United States.",
                        `Eliminated a $100 monthly subscription to Mapbox by implementing a custom script that uses Leaflet.js and the 
                        Google Sheets API to display both map and user information for over 100 organizations.`]}>
                </Experience>

                <Experience
                    title="Software Engineer" 
                    info="Hack4Impact | Boston University Chapter" 
                    dates="Jan 2025 - Present" 
                    bullets={
                        ["Automated workflow for administrative users to send mass emails to specific users via the Resend API.", 
                        "Designed a MongoDB schema and implemented aggregation queries to analyze user interaction history.", 
                        `Built a sports analytic dashboard with data input from over 30 users for the nonprofit organization, Elite Footballers
                            Tournament, using Node.js and Express.`]}>
                </Experience>
            </div>
    </div>

}