import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CartContext } from '../../../context/CartProvider/CartProvider';
import CartItem from '../CartItem/CartItem';
const Cart = () => {
    const { setIsOpen, isOpen, cart } = useContext(CartContext)
    return (
        <div className="w-full h-full px-4 text-white">
            <div>
                {/* close icon  */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'> <IoMdClose></IoMdClose>
                </div>
                <div className='flex flex-col gap-y-10 px-2'>

                    {
                        cart.map((item, i) => {
                            return <CartItem key={i} item={item} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;