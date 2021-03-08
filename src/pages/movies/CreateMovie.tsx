import React from 'react';
import { useHistory } from 'react-router-dom';
import moviesActions from '../../actions/moviesActions';
import Button from '../../ui/buttons/Button';
import Link from '../../ui/buttons/Link';
import Card from '../../ui/cards/Card';
import Page from '../../ui/cards/Page';
import InputField from '../../ui/form/InputField';
import NumberField from '../../ui/form/NumberField';
import Header from '../../ui/typography/Header';

export default function CreateMovie() {
  const [name, updateName] = React.useState("");
  const [year, updateYear] = React.useState<number>(1990);
  const [score, updateScore] = React.useState<number>(93);

  const history = useHistory()
  async function submit(event: any) {
    event?.preventDefault()
    try {
      const body = { id: 0, name, year, score }
      await moviesActions.create(body)
      history.push('/movies/')
    } catch (error) {
      //   updateError({
      //     ok: false,
      //     reason: error.reason,
      //     message: error.message,
      //   })
    }
  }

  return (
    <form className="h-full" onSubmit={submit} data-testid="create-movie-form">
      <Page>
        <Header back='/movies' text="New Movie">
          <Link to='/movies' type="basic" description="Cancel" shortcut="Esc">Cancel</Link>
          <Button type="primary" text="Save" description="Save changes" />
        </Header>
        <Card>
          <InputField label="Name" name="name" placeholder="Godfather" value={name} onChange={updateName} description="The name of the movie." />
          <NumberField label="Year" name="year" placeholder="1990" value={year} onChange={updateYear} description="Year of the movie." />
          <NumberField label="Score" name="score" placeholder="93" value={score} onChange={updateScore} description="Rating score of the Movie from 1 to 100."/>
        </Card>
      </Page>
    </form>
  );
}
