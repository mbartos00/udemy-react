import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to='/products'>Products</Link>
      </p>
    </>
  );
};
