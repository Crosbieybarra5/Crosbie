import './productList.css'
import Product from '../product/Product';
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className='pl-title'>Projects</h1>
                <p className='pl-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus saepe vero, vitae delectus blanditiis culpa dignissimos nihil? Aspernatur, non rerum corporis incidunt odio, amet provident sit sapiente suscipit dignissimos voluptatum pariatur blanditiis molestiae labore, ea unde dolorem esse commodi! Dignissimos fuga officiis earum, excepturi veniam velit sit expedita doloremque.
                </p>
            </div>
            <div className='pl-list'>
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList;