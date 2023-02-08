import '../App.css';
import Navbar from './Navbar';
import Banner from '../assets/cx 365.png';
import CustomerServiceGirl from '../assets/customer-service-girl.png';
import Frame1 from '../assets/Frame-1.png';
import Frame2 from '../assets/Frame-2.png';
import Frame3 from '../assets/Frame-3.png';
import Frame4 from '../assets/Frame-4.png';
import Ellipse from '../assets/ellipse.png';
import Circle1 from '../assets/circle-1.png';
import Circle2 from '../assets/circle-2.png';
import Circle3 from '../assets/circle-3.png';
import Circle4 from '../assets/circle-4.png';
import CXSocialFooter from '../assets/cx-footer-social.png';
import Arrow from '../assets/arrow.png';

function LandingPage() {
    return (
      <div>
        {/* HERO */}
        <div className="bg-white overflow-hidden relative" id='hero'>
          <Navbar />
          <div className="text-start w-1/2 sm:py-40 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 mt-10 ml-20">
            <img src={Banner}
              height={100}
              width={200}
              style={{ marginBottom: 20, marginTop: 40 }}
              alt=""
            />
            <h1 className='text' id='crm-title'>Multi <br /> Customer Relationship Management </h1>
  
            <h2 className='text-xl font-medium mt-7 mb-7'>We are focused on the changing the way <br />people do work</h2>
            <button
              className='bg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              style={{ backgroundColor: '#004581', marginTop: 1 }}
            >
              Get Started
            </button>
  
          </div>
          <img src={CustomerServiceGirl}
            className="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block"
            height={450}
            // width={490}
            style={{ marginTop: 140 }}
            id='' />
        </div>
         {/* HERO END*/}
  
  
        {/* WORK WITH US */}
        <div id='work-with-us' className='mb-20 '>
          <h1 className='text-white font-bold text-center text-4xl' id='title-work-with-us'>Why Work With Us?</h1>
          <div className='pt-20'>
            <ul className='flex flex-row items-center space-x-8 lg:pl-28' id='ul-work-with-us'>
              <li><img src={Frame1} alt="" width={270} height={270} /></li>
              <li><img src={Frame2} alt="" width={270} height={270} /></li>
              <li><img src={Frame3} alt="" width={270} height={270} /></li>
              <li><img src={Frame4} alt="" width={270} height={250} /></li>
            </ul>
          </div>
        </div>
        {/* WORK WITH US END */}
  
  
        {/* HOW CAN CRM HELP */}
        <div id='crm-help' className='justify-center self-center text-center' >
          <h1 className='text-xl font-bold text-center mb-10 '>Here's how our CRM can help you</h1>
          <img src={Circle4} alt="" id='crm-help-circle' />
  
          <div className='self-center flex flex-col items-center content-evenly'>
            <h1 className='text-white middle none font-bold center py-3 px-6 w-3/4 rounded-lg mb-4 text-center' style={{ backgroundColor: '#018ABD' }}>Increase your lead-to-deal</h1>
            <h1 className='text-white font-bold py-2 px-4 rounded mb-4 text-center min-w-max w-3/4' style={{ backgroundColor: '#018ABD' }}>Get a 360 degree view of your business</h1>
            <h1 className='text-white font-bold py-2 px-4 rounded mb-4 text-center w-3/4' style={{ backgroundColor: '#018ABD' }}>Get a 360 degree view of your business</h1>
            <h1 className='text-white font-bold py-2 px-4 rounded mb-4 text-center w-3/4' style={{ backgroundColor: '#018ABD' }}>Quickly get to see your next-best actions</h1>
            <h1 className='text-white font-bold py-2 px-4 rounded text-center w-3/4' style={{ backgroundColor: '#018ABD' }}>Take your business with you everywhere you go</h1>
          </div>
        </div>
        {/* HOW CAN CRM HELP END */}
  
  
        {/* OUR PRODUCTS */}
        <div id='our-products' className='mt-10 mb-14'>
          <h1 className='font-bold text-3xl text-center pt-28 text-white'>Our Products</h1>
          <div className='mt-16 pt-8'>
            <div className='grid grid-cols-6 justify-items-center justify-around px-14 md:ml-32 space-x-6 gap-6 '>
  
              <div className="flex justify-center text-center w-48 h-80">
                <div className="block p-6 rounded-lg shadow-lg max-w-sm" id='card_1'>
                  <div className=' flex flex-row content-center items-center mb-5'>
                    <img src={Ellipse} width={20} height={20}></img>
                    <h5 className="text-gray-900 text-lg leading-tight font-medium mb-2">Unified Sales platform</h5>
                  </div>
                  <strong className="text-gray-700 text-base mb-4 py-12">
                    To increase your sales success rate, we help you create a sales procedure.
                  </strong>
                </div>
              </div>
  
              <div className='self-center place-self-auto start'>
                <img src={Arrow} alt="" />
              </div>
  
              <div className="flex w-44 h-80">
                <div className="block p-6 rounded-lg shadow-lg max-w-sm" id='card_2'>
                  <div className='flex flex-row content-center items-center justify-center mb-5'>
                    <img src={Ellipse} width={20} height={20}></img>
                    <h5 className="text-gray-900 text-lg leading-tight font-medium mb-2 text-center">All in one suite</h5>
                  </div>
                  <strong className="text-gray-700 text-base mb-4 py-12">
                    We offer you all the tools necessary for the management and growth of your business.
                  </strong>
                </div>
              </div>
  
              <div className='self-center'>
                <img src={Arrow} alt="" />
              </div>
  
              <div className="flex  justify-center w-44 h-80 text-center">
                <div className="block p-6 rounded-lg shadow-lg max-w-sm" id='card_3'>
                  <div className='flex flex-row content-center items-center mb-5'>
                    <img src={Ellipse} width={20} height={20}></img>
                    <h5 className="text-gray-900 text-lg leading-tight font-medium mb-2">Help Desk management</h5>
                  </div>
                  <strong className="text-gray-700 text-base mb-4 py-12">
                    We offer you smart automations and prompt customer support with our live chat service.
                  </strong>
                </div>
              </div>
  
            </div>
          </div>
        </div>
        {/* OUR PRODUCTS END*/}
  
  
        {/* CONTACT US */}
        <div id='contact-us'>
          <div class="container my-24 px-6 mx-auto">
  
            <section className="mb-32 text-center text-gray-800" >
              <div className="max-w-[700px] mx-auto px-10 lg:px-6 pt-14" id='contact-us-main'>
                <h2 className="text-3xl font-bold mb-12 text-white">Contact us</h2>
                <form> 
                  <div className="form-group mb-6">
                    <input type="text" className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input type="email" className="form-control block 
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea13" rows="3" placeholder="Description">
                    </textarea>
                  </div>
  
                  <button type="submit" className="
                    w-full
                    text-white
                    px-6
                    py-2.5
                    b-blue-600
                    txt-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"
                    id='contact-us-send'
                  >
                    Submit
                  </button>
                </form>
              </div>
            </section>
  
          </div>
        </div>
        {/* CONTACT US  END */}
  
  
        {/* FOOTER */}
        <footer id='footer-bg' className='justify-center  lg:space-x-10'>
          <div className='grid grid-cols-4 lg:self-center sm:pt-10'>
  
            <div className='pr-28 self-center'>
              <img src={CXSocialFooter} width={120} height={100} alt="" />
            </div>
  
            <div className='text-white'>
              <h1 className='font-bold text-lg'>Quick Link</h1>
              <ul>
                <li>Home</li>
                <li>How it works</li>
                <li>About Us</li>
                <li>Get Signed Up</li>
                <li>Login</li>
              </ul>
            </div>
  
            <div className='text-white'>
              <h1 className='font-bold text-lg text-white'>Support</h1>
              <ul>
                <li>FAQs</li>
                <li>Help</li>
                <li>Blogs</li>
              </ul>
            </div>
  
            <div className='text-white'>
              <h1 className='font-bold text-lg text-white'>Connect With Us</h1>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Telegram</li>
              </ul>
            </div>
          </div>
  
          {/* <span id='line-span'></span> */}
          <p className='block font-bold text-lg text-white text-center lg:pl-96 md:pr-96 md:center' id='copyright'>Copyright &copy; 2022 CX-365</p>
        </footer>
         {/* FOOTER */}
  
      </div>
    )
  }
  
  export default LandingPage;
  