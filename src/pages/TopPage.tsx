import { ChangeEvent, useCallback, useState } from 'react';
import { Button, ControlGroup, H1, H2, InputGroup } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { useCounter } from '../states/counter';
import { useSocketIO } from '../states/socket-io';

export const TopPage = () => {
  const { counterState, incrementCounter, decrementCounter } = useCounter();

  const handleResponse = useCallback((message: string) => {
    console.log('> response: ', message);
  }, []);

  const { connected, emit } = useSocketIO('http://localhost:5000', [
    {
      eventName: 'response',
      func: handleResponse
    }
  ]);

  const [emitMessage, setEmitMessage] = useState('--test_message--');
  const handleChangeEmitMessage = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmitMessage(event.target.value);
  }, []);

  const handleEmit = useCallback(async () => {
    const response = await emit('message', emitMessage);
    console.log(response);
  }, [emit, emitMessage]);

  return (
    <div css={{ padding: '1rem' }}>
      <H1 css={{ borderLeft: '1rem solid #AF0', borderBottom: '2px solid #AF0' }}>
        <span css={{ padding: '0.5rem' }}>Symmetrical Octo Bassoon</span>
      </H1>

      <H2 css={{ marginTop: '1rem', borderLeft: '1.5rem solid #AC0', borderBottom: '2px solid #AC0' }}>
        <span css={{ padding: '0.5rem' }}>Recoil Control</span>
      </H2>
      <div>
        <div css={{ fontWeight: 700, fontSize: '200%' }}>Count: {counterState.counter}</div>
        <Button disabled={counterState.loading} icon={IconNames.PLUS} onClick={incrementCounter} />
        <Button disabled={counterState.loading} icon={IconNames.MINUS} onClick={decrementCounter} />
      </div>
      <H2 css={{ marginTop: '1rem', borderLeft: '1.5rem solid #AC0', borderBottom: '2px solid #AC0' }}>
        <span css={{ padding: '0.5rem' }}>Socket.IO Control</span>
      </H2>
      <ControlGroup vertical={false}>
        <InputGroup value={emitMessage} onChange={handleChangeEmitMessage} />
        <Button disabled={!connected} icon={IconNames.SEND_MESSAGE} onClick={handleEmit}>
          Emit
        </Button>
      </ControlGroup>
    </div>
  );
};
