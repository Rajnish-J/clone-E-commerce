import facebook from '../../assets/footer/images/socials/facebook 1.png'
import twitter from '../../assets/footer/images/socials/twitter 1.png'
import insta from '../../assets/footer/images/socials/instagram 1.png'
import tiktok from '../../assets/footer/images/socials/tiktok 1.png'
import snap from '../../assets/footer/images/socials/snapchat 1.png'

import android from '../../assets/footer/images/platforms/android-logo 1.png'
import apple from '../../assets/footer/images/platforms/apple-black-logo 1.png'

import mastercard from '../../assets/footer/images/payment/MasterCard.png'
import paypal from '../../assets/footer/images/payment/PayPal.png'
import ebay from '../../assets/footer/images/payment/eBay.png'
import gpay from '../../assets/footer/images/payment/Google Pay.png'
import monobank from '../../assets/footer/images/payment/monobank.png'
import discover from '../../assets/footer/images/payment/Discover.png'
import western_union from '../../assets/footer/images/payment/Western Union.png'
import payoneer from '../../assets/footer/images/payment/Payoneer.png'
import apple_pay from '../../assets/footer/images/payment/ApplePay.png'
import american_express from '../../assets/footer/images/payment/American Express.png'
import amazon from '../../assets/footer/images/payment/Amazon.png'
import alipay from '../../assets/footer/images/payment/AliPay.png'
import bitpay from '../../assets/footer/images/payment/BitPay.png'
import bitcoin from '../../assets/footer/images/payment/Bitcoin.png'



function footer(){


    return(
        <>
        <br /><br /><br /><br /><br /><br />
        
        <footer>

            {/* main content div */}
            <div class = "content container">

                {/* first row main */}
                <div class = "row row-up">

                    {/* first row left column */}
                    <div class = "col-6 col-left">
                        
                        {/* links row */}
                        <div class = "row d-flex justify-content-between">
                            {/* links col-1 */}
                            <div class="col-3">
                                <div>
                                    <p>company info</p>
                                </div>

                                <div>
                                    <ol>
                                        <li>About Laura's Closet</li>
                                        <li>Social Responsblity</li>
                                        <li>Affliate</li>
                                        <li>Fashion Blogger</li>
                                    </ol>
                                </div>
                            </div>

                            {/* links col-2 */}
                            <div class="col-3">
                            <div>
                                    <p>help & support</p>
                                </div>

                                <div>
                                    <ol>
                                        <li>Shipping Info</li>
                                        <li>Returns</li>
                                        <li>How to Order</li>
                                        <li>How to track</li>
                                        <li>Size chart</li>
                                    </ol>
                                </div>
                            </div>
                            
                            {/* links col-3 */}
                            <div class="col-3">
                                <div>
                                    <p>CUSTOMER CARE</p>
                                </div>
                                <div>
                                    <ol>
                                        <li>Contact Us</li>
                                        <li>Payment</li>
                                        <li>Bonus Point</li>
                                        <li>Notices</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* first row right column */}
                    <div class = "col-6 col-right">

                        {/* row col-right-row-up */}
                        <div class="row">

                            {/* col-right-row-up socials */}
                            <div class="col-5">

                                <div>
                                    <p>Socials</p>
                                </div>

                                <div class="row">
                                    <div class="col-2">
                                        <img src={facebook} alt="" />
                                    </div>
                                    
                                    <div class="col-2">
                                        <img src={twitter} alt="" />
                                    </div>
                                    
                                    <div class="col-2">
                                        <img src={insta} alt="" />
                                    </div>
                                    
                                    <div class="col-2">
                                        <img src={tiktok} alt="" />
                                    </div>
                                    
                                    <div class="col-2">
                                        <img src={snap} alt="" />
                                    </div>
                                </div>
                            </div>

                            {/* col-right-row-up platforms */}
                            <div class="col-5">
                                <div>
                                    <p>Platforms</p>
                                </div>

                                <div class="row d-flex justify-content-end">
                                    <div class="col-3">
                                        <img src={android} alt="" />
                                    </div>
                                    
                                    <div class="col-3">
                                        <img src={apple} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* row col-right-row-down */}
                        <div class="row">
                            
                            {/* subscribe column */}
                            <div class="col">
                                <div>
                                    <p>SIGN UP FOR Laura’s Closet  STYLE NEWS</p>
                                </div>

                                {/* subscribe button */}
                                <div class="row">
                                    <div class="col">
                                        <input type="mail" placeholder='your email' />
                                    </div>
                                    <div class="col">
                                        <button>SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                            <div>
                                <p>By clicking the SUBSCRIBE button, you are agreeing to our Privacy & Cookie Policy</p>
                            </div>
                        </div>

                    </div>
                </div>
                
                {/* second row main */}
                <div class = "row row-down">
                    
                    {/* col-left */}
                    <div class="col-6">
                        <div>
                            <p>©2010-2022 Laura’s Closet All Rights Reserved</p>
                        </div>
                        
                        {/* privacy centre */}
                        <div class="row d-flex justify-content-between">

                            <div class="col-3">
                                <p>Privacy Centre</p>
                            </div>
                            
                            <div class="col-3">
                                <p>Privacy & cookie policy</p>
                            </div>
                            
                            <div class="col-3">
                                <p>Manage cookies</p>
                            </div>
                        </div>

                        {/* terms and conditins */}
                        <div class="row d-flex justify-content-between">

                            <div class="col-3">
                                <p>Terms & conditions</p>
                            </div>
                            
                            <div class="col-3">
                                <p>Copyright & notice</p>
                            </div>
                            
                            <div class="col-3">
                                <p>Imprint</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* col-right */}
                    <div class="col-6">
                        <div>
                            <p>We accept</p>
                        </div>

                        <div class="row">
                            <div class="col-1">
                                <img src={mastercard} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={paypal} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={ebay} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={gpay} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={monobank} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={discover} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={western_union} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={payoneer} alt="" />
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-1">
                                <img src={apple} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={american_express} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={amazon} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={alipay} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={bitpay} alt="" />
                            </div>

                            <div class="col-1">
                                <img src={bitcoin} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </footer>

        <br /><br /><br /><br /><br /><br />
        
        </>
    )
}

export default footer;