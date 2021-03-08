import React from 'react';
import { useHistory } from 'react-router-dom';
import moviesActions from '../../actions/moviesActions';
import useMousetrap from '../../hooks/use-mousetrap';
import moviesStore from '../../stores/moviesStore';
import Button from '../../ui/buttons/Button';
import Link from '../../ui/buttons/Link';
import Card from '../../ui/cards/Card';
import Page from '../../ui/cards/Page';
import InputField from '../../ui/form/InputField';
import NumberField from '../../ui/form/NumberField';
import Header from '../../ui/typography/Header';

export interface EditMovieProps { id: number }
export default function EditMovie({ id }: EditMovieProps) {
  const [name, updateName] = React.useState("");
  const [year, updateYear] = React.useState<number>(0);
  const [score, updateScore] = React.useState<number>(0);
  const history = useHistory()

  useMousetrap("esc", () => history.push(`/movies/${id}`));

  const { data } = moviesStore.useMovie(+id)
  React.useEffect(() => {
    if (data !== undefined) {
      updateName(data.data.movie.name)
      updateYear(data.data.movie.year)
      updateScore(data.data.movie.score)
    }
  }, [data])

  async function submit(event: any) {
    event?.preventDefault()

    try {
      const body = { id: +id, name, year, score }
      await moviesActions.update(+id, body)
      history.push(`/movies/${id}`)
    } catch (error) {
      console.log('err', error)
      //   updateError({
      //     ok: false,
      //     reason: error.reason,
      //     message: error.message,
      //   })
    }
  }

  return (
    <form onSubmit={submit} className="h-full" data-testid="edit-movie-form">
      <Page>
        <Header back='/movies' text={`Movies: ${id}`}>
          <Link to={`/movies/${id}`} type="basic" description="Cancel" shortcut="Esc">Cancel</Link>
          <Button type="primary" text="Save" />
        </Header>
        <Card>
          <InputField label="Name" name="name" placeholder="Godfather" value={name} onChange={updateName} description="The name of the movie." />
          <NumberField label="Year" name="year" placeholder="1990" value={year} onChange={updateYear} description="Year of the movie." />
          <NumberField label="Score" name="score" placeholder="9" value={score} onChange={updateScore} description="Rating score of the Movie from 1 to 10." />
        </Card>
      </Page>
    </form>
  );
}