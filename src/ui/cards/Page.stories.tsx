// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import SideMenu from '../../layouts/SideMenu';
import Button from '../buttons/Button';
import Header from '../typography/Header';
import Card from './Card';
import Page from './Page';
import Table from './Table';

export default {
  title: 'Cards/Page',
  component: Card,
  argTypes: {
  },
} as Meta;

export const Primary: Story = () => <Page>
  <Header text="Simple Header with Button">
    <Button text="New" />
  </Header>
  <Card>
    <div className="w-full h-full bg-green-200" />
  </Card>
</Page>

export const WithMenu: Story = () => <SideMenu>
  <Page>
    <Header text="Simple Header with Button">
      <Button text="New" />
    </Header>
    <Card>
      <div className="w-full py-10 bg-green-200" />
      <div className="w-full py-10 bg-blue-200" />
      <div className="w-full py-10 bg-green-200" />
      <div className="w-full py-10 bg-blue-200" />
      <div className="w-full py-10 bg-green-200" />
      <div className="w-full py-10 bg-blue-200" />
      <div className="w-full py-10 bg-green-200" />
      <div className="w-full py-10 bg-blue-200" />
      <div className="w-full py-10 bg-green-200" />
    </Card>
  </Page>
</SideMenu>

export const WithTable: Story = () => <SideMenu>
  <Page>
    <Header text="Simple Header with Button">
      <Button text="New" />
    </Header>
    <Card>
      <Table to="/movies/view"
        columns={["id", "title"]}
        items={[
          { id: 1, title: "hello" },
          { id: 2, title: "second item" }
        ]}
      />
    </Card>
  </Page>
</SideMenu>