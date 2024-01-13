import useSignalState from '../../hooks/useSignalState';

const Two = () => {
  console.log('Two');

  const { second } = useSignalState();

  console.log('Two | second:', second.val);

  return <div>Two</div>;
};

export default Two;
