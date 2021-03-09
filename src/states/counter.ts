import { atom, useRecoilState } from 'recoil';

const counterState = atom({
  key: 'counter',
  default: {
    loading: false,
    counter: 0
  }
});

export const useCounter = () => {
  const [state, setState] = useRecoilState(counterState);

  const incrementCounter = () => {
    if (state.loading) {
      return;
    }
    setState({ ...state, loading: true });
    setTimeout(() => {
      setState({ ...state, counter: state.counter + 1, loading: false });
    }, 1000);
  };

  const decrementCounter = () => {
    if (state.loading) {
      return;
    }
    setState({ ...state, loading: true });
    setTimeout(() => {
      setState({ ...state, counter: state.counter - 1, loading: false });
    }, 1000);
  };

  return { counterState: state, incrementCounter, decrementCounter };
};
