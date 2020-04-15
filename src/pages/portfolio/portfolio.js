import React from 'react';
import Project from '../../components/project/project'
import Leaguelogo from '../../assets/images/league-finder.jpg'
import Janelogo from '../../assets/images/janelogo.jpg'

function Portfolio(){

    return(
        <div role="main" className= "container mb-5 p-1" style={{maxHeight: 'fit-content'}}>
        <div className= "container contentbackground myborder mx-sm-auto">
            <div className= "row d-flex align-content-center">
                <div className= "col-md-12">
                    <h1 className= "border-bottom mx-auto">Portfolio</h1>
                </div>
            </div>
            <br></br>
        <Project projectTitle= "League Finder" projectSubtitle= "First Github Project" projectText= "In this project we set out to inform our users of upcoming tournaments in cs:go and league of legends. We had dedicated pages for each. Click on the image to check out our page." projectLink= "https://github.com/israelb213/project_one" projectUrl="https://israelb213.github.io/project_one/"code={Leaguelogo} projectName="Github Project" />

        <Project projectTitle= "Jane's Essentials" projectSubtitle="Second Github Project" projectText= "In this project we set out to inform our users of the different Marijuana strains avaliable as well as informing them of medical uses and whether they have positive or negative effects. We had dedicated pages for each type of strain. We aslo included a page that shows all of the strains we have in our database. Click on the image to find out more" projectLink= "https://github.com/DillTurner/project-2" projectUrl="https://tranquil-shore-14378.herokuapp.com/index.html" code={Janelogo} projectName="Github Project" />

        <Project projectTitle= "New York Times" projectText= "This application searches through archived new york times articles." projectLink= "https://github.com/Icortez-UA/WeatherApp" code="https://www.subtraction.com/wp-content/uploads/2017/06/2017-06-21-new-york-times-issue-1.png" projectUrl="https://icortez-ua.github.io/NytArticleSearch/" projectName="NewYork Times" />

        <Project projectTitle= "Weather Forcast" projectText= "This web application helps with checking weather forecast for the day and for the next 5 days." projectLink= "https://github.com/Icortez-UA/WeatherApp" code="https://www.farmersalmanac.com/wp-content/uploads/2011/09/Clouds-Predict-Local-Weather-i861387936-600x319.jpg" projectUrl="https://icortez-ua.github.io/WeatherApp/" projectName="Weather Forcast" />

            
                
                
            
        </div>
        </div>
    )
}

export default Portfolio;