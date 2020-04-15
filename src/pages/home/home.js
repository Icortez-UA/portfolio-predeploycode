import React from 'react';
import About from '../../assets/images/biophoto.jpg'
function Home(){



    return <div>
    <br></br>
    <div role= "main" className= "container mb-5 p-1">
        <div className= "container p-4 contentbackground myborder mx-sm-auto">
            <div className= "row d-flex align-content-center">
                <div className= "col-md-12">
                    <h1 className= "border-bottom mx-auto">About Me</h1>
                </div>
            </div>
            <div className= "container">
                <div className= "row p-3">  
                    <div className= "col">
                    <img className= "img-fluid" src={About}></img> 
                    
                    </div>
                        <div className= "col-md-9">
                    <p>Hello, my name is Isaac Cortez and I am a Southern California native. I currently live in Moreno Valley with my Fiancée and family. For over 8 years, I worked as an Automotive Technician for Nissan where I had the chance to use my problem-solving skills to fix cars with issues big and small. During my free time, I enjoy playing League of Legends, Collecting POPS, Photography, Anime, and taking my God-son out on adventures.
                       </p>
                        </div>
                        <br></br>
                    </div>
                </div>
                <div className="row p-3">
                    <div className= "col-md-4 ml-5 float-right"><div className="card h-100 mr-5" >
                        <div className="card-body">
                          <h5 className="card-title">github profile</h5>
                          <p className="card-text">Check me out on github!!</p>
                          <a href="https://github.com/Icortez-UA" className="card-link"><img className="img-fluid" src= "https://github.githubassets.com/images/modules/logos_page/Octocat.png" style={{maxHeight: 100, maxWidth: 100}}></img></a>
                        </div>
                      </div></div>
                    
                    <div className= "col-md-4 ml-5 float-left"><div className="card mr-5" >
                        <div className="card-body">
                          <h5 className="card-title">Linked Resume</h5>
                          <p className="card-text">Check out my short but amazing resume</p>
                          <a href="https://drive.google.com/file/d/1ruTpqZwtRrNgb23Lax7r8MQQE7nHoWW4/view?usp=sharing" className="card-link"><img className="img-fluid" src= "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" style={{maxHeight: 100, maxWidth: 100}}></img></a>
                        </div>
                      </div></div>
                        
                </div>
            
            </div>
    </div>
</div>
}


export default Home;