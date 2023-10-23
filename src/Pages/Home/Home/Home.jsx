import ProductSlider from '../ProductSlider/ProductSlider';
import useBicycle from '../../../hooks/useBicycle';
import Hero from '../Hero/Hero';
import LatestProduct from '../LatestProduct/LatestProduct';


const Home = () => {
    const [bicycle] = useBicycle()



    return (
        <section>
            <Hero></Hero>
            <LatestProduct></LatestProduct>
        </section>
    );
};

export default Home;