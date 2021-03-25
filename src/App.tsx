import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import SideMenu from './ui/layouts/SideMenu';
import About from './pages/About';
import Home from './pages/Home';
import Movies from './pages/movies';
import { makeServer } from "./server";
import KeyboardShortcuts from './shortcuts/KeyboardShortcuts';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}


function App() {
  return (
    <Router>
      <QueryClientProvider client={client}>
        <KeyboardShortcuts />
        <SideMenu>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/movies"><Movies /></Route>
            <Route exact path="/about"><About /></Route>
          </Switch>
        </SideMenu>
      </QueryClientProvider>
    </Router>
  )
}

export default App;