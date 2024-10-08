export const CheckOut = () => {
    return (
        <>
            {/* <div className="font-[sans-serif] bg-white p-4 min-h-screen">
                <div className="lg:max-w-6xl max-w-xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 max-lg:order-1">
                            <h2 className="text-3xl font-extrabold text-[#333]">Make a payment</h2>
                            <p className="text-[#333] text-base mt-6">Complete your transaction swiftly and securely with our easy-to-use payment process.</p>
                            <form className="mt-12 max-w-lg">
                                <div className="grid gap-6">
                                    <input type="text" placeholder="Cardholder's Name"
                                        className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                                    <div className="flex bg-gray-100 border rounded-md focus-within:border-purple-500 overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 ml-3" viewBox="0 0 32 20">
                                            <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
                                            <path fill="#fed049"
                                                d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                                                className="hovered-path" data-original="#fed049" />
                                        </svg>
                                        <input type="number" placeholder="Card Number"
                                            className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <input type="number" placeholder="EXP."
                                            className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                                        <input type="number" placeholder="CVV"
                                            className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                                    </div>
                                </div>
                                <button type="button" className="mt-6 w-40 py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600">Submit</button>
                            </form>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md">
                            <h2 className="text-4xl font-extrabold text-[#333]">$250.00</h2>
                            <ul className="text-[#333] mt-10 space-y-6">
                                <li className="flex flex-wrap gap-4 text-base">Split Sneakers <span className="ml-auto font-bold">$150.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base">Echo Elegance <span className="ml-auto font-bold">$90.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">$10.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base font-bold border-t-2 pt-4">Total <span className="ml-auto">$250.00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="font-[sans-serif] bg-white p-4">
                <div className="lg:max-w-7xl max-w-xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 max-lg:order-1">
                            <div className="flex items-start">
                                <div className="w-full">
                                    <div className="flex items-center w-full">
                                        <div className="w-8 h-8 shrink-0 mx-[-1px] bg-[#333] p-1.5 flex items-center justify-center rounded-full">
                                            <span className="text-base text-white font-bold">1</span>
                                        </div>
                                        <div className="w-full h-[3px] mx-4 rounded-lg bg-[#333]"></div>
                                    </div>
                                    <div className="mt-2 mr-4">
                                        <h6 className="text-base font-bold text-[#333]">Shipping</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex items-center w-full">
                                        <div className="w-8 h-8 shrink-0 mx-[-1px] bg-[#333] p-1.5 flex items-center justify-center rounded-full">
                                            <span className="text-base text-white font-bold">2</span>
                                        </div>
                                        <div className="w-full h-[3px] mx-4 rounded-lg bg-gray-300"></div>
                                    </div>
                                    <div className="mt-2 mr-4">
                                        <h6 className="text-base font-bold text-[#333]">Billing</h6>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-300 p-1.5 flex items-center justify-center rounded-full">
                                            <span className="text-base text-white font-bold">3</span>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <h6 className="text-base font-bold text-gray-400">Confirm</h6>
                                    </div>
                                </div>
                            </div>
                            <form className="mt-16 max-w-lg">
                                <h2 className="text-2xl font-extrabold text-[#333]">Payment method</h2>
                                <div className="grid gap-4 sm:grid-cols-2 mt-8">
                                    <div className="flex items-center">
                                        <input type="radio" className="w-5 h-5 cursor-pointer" id="card" checked />
                                        <label className="ml-4 flex gap-2 cursor-pointer">
                                            <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="card1" />
                                            <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="card2" />
                                            <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="card3" />
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" className="w-5 h-5 cursor-pointer" id="paypal" />
                                        <label className="ml-4 flex gap-2 cursor-pointer">
                                            <img src="https://readymadeui.com/images/paypal.webp" className="w-20" alt="paypalCard" />
                                        </label>
                                    </div>
                                </div>
                                <div className="grid gap-6 mt-8">
                                    <input type="text" placeholder="Cardholder's Name"
                                        className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                                    <div className="flex bg-white border-b-2 focus-within:border-[#333] overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 ml-3" viewBox="0 0 291.764 291.764">
                                            <path fill="#2394bc" d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z" data-original="#2394bc" />
                                            <path fill="#efc75e" d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z" data-original="#efc75e" />
                                        </svg>
                                        <input type="number" placeholder="Card Number"
                                            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <input type="number" placeholder="EXP."
                                            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                                        <input type="number" placeholder="CVV"
                                            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                                    </div>
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label className="ml-3 block text-sm">
                                            I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <button type="button" className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-[#333] rounded-md hover:bg-gray-200">Back</button>
                                    <button type="button" className="min-w-[150px] px-6 py-3.5 text-sm bg-[#333] text-white rounded-md hover:bg-[#111]">Confirm payment $750</button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-gray-100 px-6 py-8 rounded-md">
                            <h2 className="text-5xl font-extrabold text-[#333]">$750</h2>
                            <ul className="text-[#333] mt-10 space-y-6">
                                <li className="flex flex-wrap gap-4 text-base">Split Sneakers <span className="ml-auto font-bold">$150.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base">Echo Elegance <span className="ml-auto font-bold">$200.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base">VelvetGlide Boots <span className="ml-auto font-bold">$300.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">$100.00</span></li>
                                <li className="flex flex-wrap gap-4 text-base font-bold border-t-2 pt-4">Total <span className="ml-auto">$750.00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}