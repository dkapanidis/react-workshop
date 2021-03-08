// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import Button from '../buttons/Button';
import Link from '../buttons/Link';
import Header from './Header';

export default {
  title: 'Layouts/Header',
  component: Header,
  argTypes: {
  },
} as Meta;

export const Simple: Story = () => <Header text="Simple Header" />

export const WithButton: Story = () => <Header text="Simple Header with Button">
  <Button text="New" />
</Header>

export const WithBack: Story = () => <Header back="/" text="Simple Header with Back">
  <Link to="/"><BiEdit/></Link>
</Header>