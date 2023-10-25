import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CartContext } from '../../../context/CartProvider/CartProvider';
import CartItem from '../CartItem/CartItem';
const Cart = () => {
    const { setIsOpen, isOpen, cart, total } = useContext(CartContext)
    return (
        <div className="w-full h-full px-4 text-white">
            <div className='overflow-y-auto overflow-x-hidden h-[70vh]'>
                {/* close icon  */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'>
                    <IoMdClose></IoMdClose>
                </div>
                <div className='flex flex-col gap-y-10 px-2'>

                    {
                        cart.map((item, i) => {
                            return <CartItem key={i} item={item} />
                        })
                    }
                </div>

                {/* subtotal and total  */}
                {cart.length >= 1 && < div className=''>
                    <div className='px-6 py-10 flex flex-col '>
                        {/* sub  */}
                        <div className='flex justify-between'>
                            <div>Subtota</div>

                            <div>
                                ${total}
                            </div>
                        </div>
                        {/* total  */}
                        <div className='flex justify-between text-2xl'>
                            <div>Total:</div>
                            <div>
                                ${total}
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            {/* button  */}
            <div className='p-6'>
                {cart.length >= 1 ?
                    <div className='flex justify-between gap-x-4'>
                        <button>Clear Cart</button>
                        <button>Check Out</button>
                    </div>
                    : <div> Your Cart is Empty</div>}
            </div>


        </div >
    );
};

export default Cart;