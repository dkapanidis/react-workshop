// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Button from '../buttons/Button';

import ConfirmationModal from './ConfirmationModal';

export default {
  title: 'Modals/ConfirmationModal',
  component: ConfirmationModal,
  argTypes: {
  },
} as Meta;

export const Primary: Story = () => {
  const [open, setOpen] = useState(true)
  return <>
    <Button text="open dialog" onClick={() => setOpen(true)} />
    <ConfirmationModal title="Are you sure you want to delete the movie?"
      description="Deleted movies cannot be restored. Once deleted it will be lost forever."
      open={open}
      setOpen={setOpen}>
      <Button text="Delete" type="danger" />
    </ConfirmationModal>
  </>
}