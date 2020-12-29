import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";
import EventDetailed from "./eventdetailed/EventDetailed";
import EventForm from "./eventform/EventForm";
import EventsDashboard from "./events/EventsDashboard";
import Home from "./home/Home";
import Navbar from "./nav/Navbar";

function App() {

 const {key} = useLocation();

  
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Route exact path="/events" component={EventsDashboard} />
              <Route path="/events/:id" component={EventDetailed} />
              <Route path={['/createEvent' , '/manage/:id']} component={EventForm} key={key} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
