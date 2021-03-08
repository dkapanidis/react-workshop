import useMousetrap from '../hooks/use-mousetrap';
import React from 'react';
import { useHistory } from 'react-router-dom';

function KeyboardShortcuts() {
  const history = useHistory()

  // shortcuts
  useMousetrap("g h", () => history.push("/"));
  useMousetrap("g m", () => history.push("/movies"));
  useMousetrap("g a", () => history.push("/about"));

  return <></>
}

export default KeyboardShortcuts