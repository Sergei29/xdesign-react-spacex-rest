import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// components:
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import SpacexLogo from "../../components/SpacexLogo";
import RefetchLaunchesButton from "../../components/RefetchLaunchesButton";
import PageNotFound from "../../pages/PageNotFound";
import LaunchesPage from "../../pages/LaunchesPage";
// style:
import GlobalStyle from "../../GlobalStyle/GlobalStyle";
import { themeLight } from "../../theme/theme";
import { AppContainer } from "./style";

/**
 * @description container component
 * @returns {JSX} component markup, application container
 */
const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <AppContainer>
        <GlobalStyle />
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
          <small>This page is created for training purposes only.</small>.
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
