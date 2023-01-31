import { Link, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const params = useParams();

  return <>
    <h1>Product Details!</h1>
    <p>{params.productId}</p>
    <p><Link to=".." relative='path'>Back</Link></p>  
    {/* default: resolve to route definition  go back to home page */}
    {/* relative='path' to go back one level based on URL */}
  </>;
};

export default ProductDetailPage;
