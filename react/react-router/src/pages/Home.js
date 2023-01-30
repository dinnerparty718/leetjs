import { Link } from 'react-router-dom';

const HomePage = () => {
  return <>
    <h1>My Home Page</h1>
    <p>Go to <Link to='/product'>The list of product</Link></p>
  </>;
};

export default HomePage;
