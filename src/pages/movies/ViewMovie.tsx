import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router-dom';
import moviesActions from '../../actions/moviesActions';
import SuspenseContainer from '../../containers/SuspenseContainer';
import useMousetrap from '../../hooks/use-mousetrap';
import moviesStore from '../../stores/moviesStore';
import Button from '../../ui/buttons/Button';
import Link from '../../ui/buttons/Link';
import Card from '../../ui/cards/Card';
import Page from '../../ui/cards/Page';
import ConfirmationModal from '../../ui/modals/ConfirmationModal';
import Header from '../../ui/typography/Header';

export interface ViewMovieProps { id: number }
export default function ViewMovie({ id }: ViewMovieProps) {
  const history = useHistory()
  const [open, setOpen] = useState(false);

  useMousetrap("esc", () => {
    if (open) setOpen(false)
    else history.push("/movies")
  })

  const openDialog = () => setOpen(true)

  const remove = () => {
    moviesActions.remove(id)
    history.push("/movies")
  }

  return (
    <Page>
      <Mousetrap key="esc" to="/movies" />
      <Header back="/movies" text={`Movies: ${id}`}>
        <Link to={`/movies/${id}/edit`} type="secondary" description="Edit Movie" shortcut="E"><BiEdit /></Link>
        <Button type="danger" text="Delete" onClick={openDialog} description="Remove Movie" shortcut="#" />
      </Header>
      <Card>
        <SuspenseContainer>
          <ViewMovieCard id={id} />
        </SuspenseContainer>
      </Card>
      <ConfirmationModal title="Are you sure you want to delete the movie?"
        description="Deleted movies cannot be restored. Once deleted it will be lost forever."
        open={open}
        setOpen={setOpen}>
        <Button text="Delete" type="danger" onClick={remove} />
      </ConfirmationModal>
    </Page>
  )
}

function Mousetrap({ key, to }: { key: string, to: string }) {
  const history = useHistory()
  useMousetrap("esc", () => history.push("/movies"));
  return <></>
}
function ViewMovieCard({ id }: ViewMovieProps) {
  const { data, refetch } = moviesStore.useMovie(id)
  const location = useLocation()
  useEffect(() => { refetch() }, [refetch, location])

  return <div className="p-2">
    <h1 className="text-xl">{data?.data.movie.name} <span className="text-lg font-light tracking-widest">({data?.data.movie.year})</span></h1>
    <p>Score: {data?.data.movie.score}</p>
  </div>
}