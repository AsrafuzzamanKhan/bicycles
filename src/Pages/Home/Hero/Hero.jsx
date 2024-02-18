
import promoImg1 from '../../../assets/hero/bicycle1.png'
import promoImg2 from '../../../assets/hero/bicycle2.png'

import CategoryNav from '../CategoryNav/CategoryNav';
import MainSlider from '../MainSlider/MainSlider';
const Hero = () => {
    return (
        <section className='pt-28 lg:pt-24 xl:pt-24 '>
            <div className='container mx-auto w-full'>
                <div className='flex flex-col lg:flex-row lg:gap-4 xl:gap-2 w-full'>
                    {/* sidebar  */}
                    <div>
                        <CategoryNav></CategoryNav>
                    </div>
                    {/* main slide  */}
                    <div className='lg:w-[600px] w-full xl:w-[750px] mx-auto'>
                        <MainSlider></MainSlider>
                    </div>
                    {/* promo image  */}
                    <div className='h-[500px] flex flex-col gap-4 '>
                        <div className='grad  h-[250px] flex lg:flex-col sm:flex-row gap-4 p-2 lg:p-[.5vw] rounded-[8px] overflow-hidden items-center'>
                            {/* text  */}
                            <div className=''>
                                <div className='text-[20px] uppercase font-medium leading-snug'>Save 30% all Bicycle </div>
                                <a href="#" className='uppercase text-accent'>Shop now</a>
                            </div>


                            <img className='w-[90%] object-contain' src={promoImg1} alt="" />

                        </div>
                        <div className='grad  h-[250px] flex lg:flex-col sm:flex-row gap-4 p-2 lg:p-[.5vw] rounded-[8px] overflow-hidden items-center'>
                            {/* text  */}
                            <div className=''>
                                <div className='text-[20px] uppercase font-medium leading-snug'>Save 30% all Bicycle </div>
                                <a href="#" className='uppercase text-accent'>Shop now</a>
                            </div>


                            <img className='w-[90%] object-contain' src={promoImg2} alt="" />

                        </div>
                        {/* <div className='grad h-[250px] rounded-[8px] overflow-hidden relative p-6'>
                            
                            <div className='flex flex-col max-w-[144px] h-full justify-center'>
                                <div className='text-[20px] uppercase font-medium leading-snug'>Save 30% all Bicycle </div>
                                <a href="#" className='uppercase text-accent'>Shop now</a>
                            </div>


                            <img className='absolute  top-5 right-0 w-[250px] lg:w-[200px] lg:top-20 lg:-right-8 xl:right-0' src={promoImg2} alt="" />

                        </div> */}


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;