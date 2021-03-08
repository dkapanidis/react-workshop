// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import NumberField from './NumberField';

export default {
  title: 'Form/NumberField',
  component: NumberField,
  argTypes: {
  },
} as Meta;

export const Simple: Story = () => <NumberField
  label="Score"
  name="score"
  placeholder="Movie score"
  description="The score of the movie."
  value={3}
  onChange={() => { }} />
