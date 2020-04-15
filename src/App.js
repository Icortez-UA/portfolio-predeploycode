import React from 'react';
import { Route, Switch} from 'react-router-dom';
import NavTabs from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Portfolio from './pages/portfolio/portfolio'
import Contact from './pages/contact/contact'

function App() {
  return (      <div>
                        <Route>
                            <NavTabs />
                            <Switch>
                                <Route exact path="/react-portfolio/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/portfolio" component={Portfolio} />
                                <Route exact path="/Contact" component={Contact} />
                            </Switch>
                        </Route>
                      <Footer>

                      </Footer>
               </div>

  );
}

export default App;
