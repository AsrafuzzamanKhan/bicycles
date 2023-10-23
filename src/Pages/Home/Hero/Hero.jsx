
import promoImg1 from '../../../assets/hero/bicycle1.png'
import promoImg2 from '../../../assets/hero/bicycle2.png'
import promoImg3 from '../../../assets/hero/bicycle3.png'
import CategoryNav from '../CategoryNav/CategoryNav';
import MainSlider from '../MainSlider/MainSlider';
const Hero = () => {
    return (
        <section className='mb-[30px] pt-36 lg:pt-0'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>
                    {/* sidebar  */}
                    <div>
                        <CategoryNav></CategoryNav>
                    </div>
                    {/* main slide  */}
                    <div className='w-full max-w-lg  lg:max-w-[734px] mx-auto'>
                        <MainSlider></MainSlider>
                    </div>
                    {/* promo image  */}
                    <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]'>
                        <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
                            {/* text  */}
                            <div className='flex flex-col max-w-[144px] h-full justify-center'>
                                <div className='text-[20px] uppercase font-medium leading-snug'>Save 30% all Bicycle </div>
                                <a href="#" className='uppercase text-accent'>Shop now</a>
                            </div>


                            <img className='absolute z-20 lg:-bottom-12 sm:bottom-0 lg:-right-12  sm:right-0 lg:w-[250px] w-[300px]' src={promoImg1} alt="" />

                        </div>
                        <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
                            {/* text  */}
                            <div className='flex flex-col max-w-[144px] h-full justify-center'>
                                <div className='text-[20px] uppercase font-medium leading-snug'>Save 30% all Bicycle </div>
                                <a href="#" className='uppercase text-accent'>Shop now</a>
                            </div>


                            <img className='absolute z-20 lg:-bottom-12 sm:bottom-0 lg:-right-12 sm:right-0 lg:w-[250px] sw-[300px]' src={promoImg2} alt="" />

                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;