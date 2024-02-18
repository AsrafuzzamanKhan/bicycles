
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../style/slider.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';

import cycleImg1 from '../../../assets/hero/bicycle3.png'
import cycleImg2 from '../../../assets/hero/bicycle4.png'
import cycleImg3 from '../../../assets/hero/bicycle5.png'
const sliderData = [
    {
        img: cycleImg1,
        preTitle: 'Special Offer',
        titlePart1: 'Save 20%',
        titlePart2: 'On Your',
        titlePart3: 'first order',
        btnText: 'Shop now'
    },
    {
        img: cycleImg2,
        preTitle: 'Special Offer',
        titlePart1: 'Save 20%',
        titlePart2: 'On Your',
        titlePart3: 'first order',
        btnText: 'Shop now'
    },
    {
        img: cycleImg3,
        preTitle: 'Special Offer',
        titlePart1: 'Save 20%',
        titlePart2: 'On Your',
        titlePart3: 'first order',
        btnText: 'Shop now'
    }
]
const MainSlider = () => {

    return (
        <Swiper
            modules={[Pagination]}
            loop={true}
            pagination={{
                clickable: true,
            }}
            className='mainSlider h-full w-full bg-primary lg:bg-no-repeat  lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl mx-auto'
        >
            <>
                {
                    sliderData.map((slide, i) => {
                        return <SwiperSlide key={i}>
                            <div className='flex flex-col lg:flex-row h-full p-[20px] md:p-[60px] mx-auto'>

                                <div className='w-full lg:flex-1'>
                                    {/* text  */}
                                    <div className='uppercase mb-1 text-center lg:text-left'> {slide.preTitle}</div>
                                    <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20'>
                                        {slide.titlePart1} <br />
                                        {slide.titlePart2}<br />
                                        {slide.titlePart3}<br />
                                    </div>
                                    <button className='btn bg-accent border-none flex mx-auto lg:mx-0'>Shop Now</button>
                                </div>
                                <div className='flex-1 mx-auto'>
                                    <img className='lg:absolute  w-[400px] lg:right-10 lg:bottom-6 ' src={slide.img} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }


            </>
        </Swiper >
    );
};

export default MainSlider;