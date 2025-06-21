import React from 'react'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import { Mail, MapPin, Phone } from 'lucide-react'


const Footer = () => {
    return (
        <footer className="bg-muted text-muted-foreground bg-orange-50" id='footer'>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href='#home'>Home</a></li>
                            <li>Menu</li>
                            <li><a href='#footer'>About Us</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Contact Us</h3>
                        <div className='flex gap-2'>
                            <MapPin className='text-red-500' />
                            <div>
                                <p>Manoramo Complex, Zone-1<br/> M P Nagar </p>
                                <p>Bhopal, MP 462011</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Phone className='text-red-500 my-4' />
                            <p>Phone: 8817968077</p>
                        </div>
                        <div className='flex gap-2'>
                            <Mail className='text-red-500' />
                            <p>Email: flavorlyindia25@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Opening Hours</h3>
                        <p>Monday - Friday: 11am - 10pm</p>
                        <p>Saturday - Sunday: 10am - 11pm</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Follow Us</h3>

                        <div className="flex space-x-4">


                            <img src={facebook} alt="facebook" className="h-6 w-6 cursor-pointer" />
                            <span className="sr-only">Facebook</span>



                            <img src={instagram} alt="instagram" className="h-6 w-6 cursor-pointer" />
                            <span className="sr-only">Instagram</span>



                            <img src={twitter} alt="twitter" className="h-6 w-6 cursor-pointer" />
                            <span className="sr-only">Twitter</span>

                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Your <span className='text-red-500 font-semibold'>Flavorly</span>India. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer