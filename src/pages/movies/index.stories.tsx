// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import CreateMovie from './CreateMovie';
import ListMovies from './ListMovies';
import ViewMovie from './ViewMovie';
import EditMovie from './EditMovie';

export default {
  title: 'Movies/Movies',
} as Meta;

export const List: Story = () => <ListMovies />
export const Create: Story = () => <CreateMovie />
export const View: Story = () => <ViewMovie id={1} />
export const Edit: Story = () => <EditMovie id={1} />
