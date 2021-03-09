import React from 'react';
import { Icon, Button, H1 } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export const TopPage = () => {
  return (
    <div>
      <H1>Symmetrical Octo Bassoon</H1>
      <Button icon={IconNames.ALIGNMENT_BOTTOM} text='Test' />
    </div>
  );
};
