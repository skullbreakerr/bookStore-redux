import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      title: "Physics Textbook",
      price: 15,
      description: "This is the First Book...",
    },
    {
      id: "p2",
      title: "Maths Textbook",  
      price: 8,
      description: "This is the Second Book...",
    },
    {
      id: "p3",
      title: "Science Texbook",  
      price: 18,
      description: "This is the Sience Book...",
    },
    {
      id: "p4",
      title: "Biology Textbook",  
      price: 5,
      description: "Biology Textbook for GSEB Stream...",
    },
    {
      id: "p5",
      title: "Chemistry Guide",  
      price: 7,
      description: "Chemistry guide for 11th Science...",
    }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            )

          })
        }
      </ul>
    </section>
  );
};

export default Products;
