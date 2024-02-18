
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../style/slider.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Product from '../Product/Product';
const ProductSlider = ({ data }) => {

    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            loop={false}
            navigation={true}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 30
                },

            }}
            className=' container mx-auto '
        >
            <>
                {data?.map(product => {
                    return <SwiperSlide key={product.id}>
                        <Product product={product}></Product>
                    </SwiperSlide>
                })}
            </>
        </Swiper >
    );
};

export default ProductSlider;