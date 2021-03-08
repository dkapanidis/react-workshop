// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Link, { LinkProps } from './Link';
import { BiEdit } from 'react-icons/bi';

export default {
  title: 'Buttons/Link',
  component: Link,
  argTypes: {
  },
} as Meta;

const Template: Story<LinkProps> = (args: LinkProps) => <div className="space-y-4">
  <Row {...args} type="primary"/>
  <Row {...args} type="secondary"/>
  <Row {...args} type="danger"/>
  <Row {...args} type="basic"/>
</div>

function Row(args: LinkProps) {
  return <div className="space-x-2">
    <Link {...args} />
  </div>
}
export const Primary = Template.bind({});
Primary.args = {
  children: "click me",
  to: "/abc",
  description: "This button does stuff",
  shortcut: "C",
};

export const Icon = Template.bind({});
Icon.args = {
  children: <BiEdit/>,
  to: "/abc",
  description: "This button does stuff",
  shortcut: "C",
};