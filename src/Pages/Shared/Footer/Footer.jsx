
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className='pt-16 bg-primary '>
            <div className="container mx-auto">
                <div className='text-center'>
                    <h2 className='h2 uppercase mb-6 font-semibold'>Subscribe to our newsletter</h2>
                    <p className='text-white/70'>Be the first to get the latest news abour trrends, promotions and much more!</p>
                </div>
                <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14' >
                    <input type="email" placeholder="Your Email Address"
                        className="input" />
                    <button className="btn btn-accent min-w-[150px]">Join</button>
                </form>
                {/* link  */}
                <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
                    <a href="#" className="hover:text-white transition-all">Track your order</a>
                    <a href="#" className="hover:text-white transition-all">Return Policy</a>
                    <a href="#" className="hover:text-white transition-all">Shipping & delivery</a>
                </div>
                {/* social  */}
                <div className=' flex max-w-max mx-auto gap-x-6 text-lg mb-16'>
                    <a href="#" className="hover:text-white transition-all">
                        <FaYoutube></FaYoutube> </a>
                    <a href="#" className="hover:text-white transition-all">
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href="#" className="hover:text-white transition-all"><FaTwitter></FaTwitter></a>
                    <a href="#" className="hover:text-white transition-all"><FaInstagram></FaInstagram></a>
                </div>
            </div>
            {/* copy rigte  */}
            <div className='py-10 border-t border-t-white/10'>
                <div className='container mx-auto'>
                    <div className='text-center text-sm text-white/60'>
                        Copyright &copy; Bicicle 2023.All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;