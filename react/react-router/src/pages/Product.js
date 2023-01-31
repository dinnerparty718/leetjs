import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 'p1', title: 'product 1' },
  { id: 'p2', title: 'product 2' },
  { id: 'p3', title: 'product 3' },

]

const ProductPage = () => {
  return <>
    <h1>The Products Page</h1>
    <ul>
      {PRODUCTS.map(p => <li key={p.id} >
        <Link to={`/products/${p.id}`}> {p.title} </Link>
        {/* <Link to={p.id}> {p.title} </Link> */}
      </li>)}

    </ul>
  </>;
};

export default ProductPage;
