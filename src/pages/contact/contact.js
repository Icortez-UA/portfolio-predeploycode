import React from "react"

function Contact(){

    return(
        <div role= "main" class= "container mb-5 p-1">
        <div class= "container contentbackground myborder mx-sm-auto">
          <div class= "row d-flex align-content-center">
              <div class= "col-md-12">
                  <h1 class= "border-bottom mx-auto">Contact</h1>
              </div>
          </div>
          <div class= "row">
              <div class= "col-md-12">
                      <form class= "p-2">
                              <div class="form-group">
                                <label for="formGroupExampleInput">Name:</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"></input>
                              </div>
                              <div class="form-group">
                                <label for="formGroupExampleInput2">Email:</label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email"></input>
                              </div>
                              <div class="form-group">
                                      <label for="exampleFormControlTextarea1">Message:</label>
                                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                              </div>
                              <input class="btn btn-primary" type="submit" value="Submit"></input>
                          </form>
              </div>
          </div>

      </div>
      </div>
    )
}


export default Contact;