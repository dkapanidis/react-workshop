// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <div className="space-y-4">
  <Row {...args} type="primary"/>
  <Row {...args} type="secondary"/>
  <Row {...args} type="danger"/>
  <Row {...args} type="basic"/>
</div>

function Row(args: ButtonProps) {
  return <div className="space-x-2">
    <Button {...args} />
    <Button {...args} loading={true} />
    <Button {...args} loading={false} disabled={true} />
    <Button {...args} loading={true} disabled={true} />
  </div>
}
export const Primary = Template.bind({});
Primary.args = {
  text: "click me",
  description: "This button does stuff",
  shortcut: "C"
};