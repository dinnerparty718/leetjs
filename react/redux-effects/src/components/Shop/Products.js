import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My first book', description: 'i wrote it' },
  { id: 'p2', price: 10, title: 'My Second book ', description: 'i wrote it too' }

]



const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

        {DUMMY_PRODUCTS.map(product => <ProductItem
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
          key={product.id}
        />)}

      </ul>
    </section>
  );
};

export default Products;
