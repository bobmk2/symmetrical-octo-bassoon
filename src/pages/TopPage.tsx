import { Button, H1, H2 } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { useCounter } from '../states/counter';

export const TopPage = () => {
  const { counterState, incrementCounter, decrementCounter } = useCounter();

  return (
    <div css={{ padding: '1rem' }}>
      <H1 css={{ backgroundColor: 'red' }}>Symmetrical Octo Bassoon</H1>
      <Button icon={IconNames.ALIGNMENT_BOTTOM} text='Test' />
      <H2 css={{ backgroundColor: 'red' }}>テスト</H2>
      にゃーん
      <div css={{ fontWeight: 700, fontSize: '200%' }}>
        {counterState.counter}
        <Button disabled={counterState.loading} icon={IconNames.PLUS} onClick={incrementCounter} />
        <Button disabled={counterState.loading} icon={IconNames.MINUS} onClick={decrementCounter} />
      </div>
    </div>
  );
};
