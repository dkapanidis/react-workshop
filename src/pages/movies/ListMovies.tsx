import { Add } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SuspenseContainer from '../../containers/SuspenseContainer';
import moviesStore from '../../stores/moviesStore';
import Link from '../../ui/buttons/Link';
import Card from '../../ui/cards/Card';
import Page from '../../ui/cards/Page';
import Table from '../../ui/cards/Table';
import Header from '../../ui/typography/Header';

export default function ListMovies() {
  return (
    <Page>
      <Header text="Movies">
        <Link to="/movies/new" description="Create new movie" shortcut="C"><Add fontSize="small"/></Link>
      </Header>
      <Card>
        <SuspenseContainer>
          <ListMoviesCard />
        </SuspenseContainer>
      </Card>
    </Page>
  );
}

function ListMoviesCard() {
  const { data, refetch } = moviesStore.useMovies();
  const location = useLocation()
  useEffect(() => { refetch() }, [refetch, location])
  return <Table to="/movies" items={data!.data.movies} columns={["name", "year", "score"]} />
}