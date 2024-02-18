
import ProductSlider from '../ProductSlider/ProductSlider';
import useBicycle from '../../../hooks/useBicycle';

const LatestProduct = () => {
    const [bicycle] = useBicycle()

    const newProduct = bicycle.filter(item => item.isNew === true)
    return (

        <div className='my-16  '>
            <div className='container mx-auto '>
                <h2 className='text-2xl uppercase text-center xl:text-left mb-8'>Latest Products</h2>
            </div>
            <ProductSlider data={newProduct}></ProductSlider>

        </div>

    );
};

export default LatestProduct;