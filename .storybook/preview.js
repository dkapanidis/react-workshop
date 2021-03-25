import { addDecorator } from '@storybook/react';
import React from 'react';
import Layout from './Layout';
import '../src/index.css';

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}