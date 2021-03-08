import React from 'react';
import { Route, Switch, useParams } from "react-router-dom";
import SuspenseContainer from '../../containers/SuspenseContainer';
import QueryParams from '../../models/queryParams';
import ListMovies from '../../pages/movies/ListMovies';
import CreateMovie from './CreateMovie';
import EditMovie from './EditMovie';
import ViewMovie from './ViewMovie';

function Movies() {
  return (
    <SuspenseContainer>
      <Switch>
        <Route exact path="/movies"><ListMovies /></Route>
        <Route strict exact path="/movies/new"><CreateMovie /></Route>
        <Route exact path="/movies/:id/edit"><EditMovieParams /></Route>
        <Route exact path="/movies/:id"><ViewMovieParams /></Route>
      </Switch>
    </SuspenseContainer>
  );
}

function ViewMovieParams() {
  let { id } = useParams<QueryParams>()
  return <ViewMovie id={+id} />
}

function EditMovieParams() {
  let { id } = useParams<QueryParams>()
  return <EditMovie id={+id} />
}

export default Movies;