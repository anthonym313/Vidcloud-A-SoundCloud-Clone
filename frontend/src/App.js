import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import SearchResults from "./components/SearchResultsPage";
import UserProfile from "./components/UserProfilePage";
import VideoPage from "./components/VideoPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search/results">
            <SearchResults />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route>
            <UserProfile path="/users"/>
          </Route>
          {/* <Route>
            <VideoPage path="/video/:id"/>
          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;