import { Link } from "react-router-dom";

function Footer() {

    return (
        <>
            <footer className="bg-gray-50 px-4 sm:px-10 py-12 mt-28">
                <div className="md:max-w-[50%] mx-auto text-center">
                    <div className="bg-[#fff] border flex px-2 py-1 rounded-full text-left mt-4">
                        <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent pl-4" />
                        <button type='button'
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 transition-all">Subscribe</button>
                    </div>
                </div>
                <div className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-5 gap-8 border-t border-gray-300 mt-10 pt-8">
                    <div className="xl:col-span-2">
                        <h4 className="text-xl font-semibold mb-6">Disclaimer</h4>
                        <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
                            mi eu pulvinar cursus, sem elit interdum mauris.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="" className="hover:text-blue-600">Web
                                Development</Link></li>
                            <li><Link to="" className="hover:text-blue-600">Mobile App
                                Development</Link></li>
                            <li><Link to="" className="hover:text-blue-600">UI/UX
                                Design</Link></li>
                            <li><Link to="" className="hover:text-blue-600">Digital Marketing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link to="" className="hover:text-blue-600">Webinars</Link>
                            </li>
                            <li><Link to="" className="hover:text-blue-600">Ebooks</Link>
                            </li>
                            <li><Link to="" className="hover:text-blue-600">Templates</Link>
                            </li>
                            <li><Link to="" className="hover:text-blue-600">Tutorials</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">About Us</h4>
                        <ul className="space-y-4">
                            <li><Link to="" className="hover:text-blue-600">Our Story</Link>
                            </li>
                            <li><Link to="" className="hover:text-blue-600">Mission and
                                Values</Link></li>
                            <li><Link to="" className="hover:text-blue-600">Team</Link></li>
                            <li><Link to="" className="hover:text-blue-600">Testimonials</Link></li>
                        </ul>
                    </div>
                </div>
                <p className='mt-10'>© 2023<Link to='https://readymadeui.com/' target='_blank'
                    className="hover:underline mx-1">ReadymadeUI</Link>All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Footer;