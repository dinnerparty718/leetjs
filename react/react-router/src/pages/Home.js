import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // programatically navigate
  const navigateHandler = () =>{
    navigate('/products');
  }

  return <>
    <h1>My Home Page</h1>
    <p>Go to <Link to='/products'>The list of product</Link></p>
    <p><button onClick={navigateHandler}>Navigate</button></p>
  </>;
};

export default HomePage;
