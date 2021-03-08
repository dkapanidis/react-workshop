// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import InputField from './InputField';

export default {
  title: 'Form/InputField',
  component: InputField,
  argTypes: {
  },
} as Meta;

export const Simple: Story = () => <InputField
  label="Name"
  name="name"
  placeholder="Movie name"
  description="The name of the movie."
  value="hello"
  onChange={() => { }} />
