

import { FiMenu, FiShoppingBag } from 'react-icons/fi'
import SearchForm from '../../Home/SearchForm/SearchForm';
import CategoryNavMobile from '../../Home/CategoryNavMobile/CategoryNavMobile';
import { Link } from 'react-router-dom';
import Cart from '../../Home/Cart/Cart';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartProvider/CartProvider';

const Header = () => {
    const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
    const [catNavMobile, setCatNavMobile] = useState(false)


    return (
        <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>
            <div className="container mx-auto">
                <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
                    {/* menu  */}
                    <div
                        onClick={() => setCatNavMobile(true)}
                        className='text-3xl xl:hidden cursor-pointer'>
                        <FiMenu></FiMenu>
                    </div>
                    {/* category nav mobile  */}
                    <div className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
                        <CategoryNavMobile setCatNavMobile={setCatNavMobile}></CategoryNavMobile>
                    </div>
                    {/* logo */}
                    <Link to={'/'}>
                        <h1>Bicycle</h1>
                    </Link>
                    {/* seach form show only desktop  */}
                    <div className='hidden w-full rounded-lg xl:flex xl:max-w-[734px] bg-purple-200'>
                        <SearchForm />
                    </div>
                    {/* phone and cart  */}
                    <div className='flex items-center gap-x-[10px] '>


                        <div className='hidden xl:flex uppercase'>Need help? 123 456 789</div>

                        {/* cart icon
                     */}
                        <div onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer'>
                            <FiShoppingBag className='text-2xl'></FiShoppingBag>
                            {/* amount  */}
                            <div className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-start font-bold tracking-[-0.1em]'>
                                {itemsAmount}
                            </div>
                        </div>
                        {/* cart  */}
                        <div className={`
                    ${isOpen ? 'right-0' : '-right-full'}
                    bg-black shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}>
                            <Cart></Cart>
                        </div>
                    </div>

                </div>
                {/* seacrh form show on mobile only  */}
                <div className='xl:hidden'>
                    <SearchForm />
                </div>
            </div>
        </header>
    );
};

export default Header;