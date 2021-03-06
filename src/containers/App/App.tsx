import React from "react";
import { Switch, Route } from "react-router-dom";
import {} from "module";
// components:
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import SpacexLogo from "../../components/SpacexLogo";
import RefetchLaunchesButton from "../../components/RefetchLaunchesButton";
import PageNotFound from "../../pages/PageNotFound";
import LaunchesPage from "../../pages/LaunchesPage";
// style:
import { AppContainer } from "./style";

/**
 * @description container component
 * @returns {JSX} component markup, application container
 */
const App = () => {
  return (
    <AppContainer>
      <Header>
        <SpacexLogo />
        <RefetchLaunchesButton />
      </Header>
      <Main>
        <Switch>
          <Route path="/" exact component={LaunchesPage} />
          <Route exact component={PageNotFound} />
        </Switch>
      </Main>
      <Footer>
        <small>footer disclaimer etc</small>.
      </Footer>
    </AppContainer>
  );
};

export default App;
