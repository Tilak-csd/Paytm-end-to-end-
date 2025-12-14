import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { Menu, X, ArrowRight, Phone, CreditCard, Gift, Users } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Paytm for Consumer', href: '#' },
    { name: 'Paytm for Business', href: '#' },
    { name: 'Investor Relations', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo - Replace with your actual PayTM logo */}
            <a href="#" className="flex-shrink-0 text-3xl font-bold text-blue-800">
              <span className="text-blue-600">Pay</span><span className="text-blue-800">TM</span>
            </a>
          </div>
          <div className="hidden lg:ml-6 lg:flex lg:space-x-8 lg:items-center">
            {navItems.map((item) => (
              <p
                key={item.name}
                onClick={()=> navigate(`${item.href}`)
                }
                className="cursor-pointer text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="hidden lg:ml-4 lg:flex lg:items-center">
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-150 ease-in-out shadow-lg
            "
              onClick={()=> navigate('/signin')}
            >
              Sign In <Users className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center lg:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
          <button className="w-full text-left flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out mt-2"
            onClick={()=> navigate('/signin')}>
            Sign In <Users className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <header className="bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
          India's Most Loved Payments App
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Pay, Book & Grow with <span className="text-blue-600">PayTM</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
          Recharge your mobile, pay bills, invest in gold, get insurance, and much more—all in one app.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105">
            Download App <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="flex items-center bg-transparent border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300 hover:bg-blue-50">
            Explore Features
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        {/* Placeholder for a relevant image/screenshot of the app */}

      </div>
    </div>
  </header>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
    {icon}
    <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        The Power of PayTM
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Phone className="h-8 w-8 text-blue-600" />}
          title="Mobile Recharge & Payments"
          description="Instant recharges, bill payments for electricity, water, DTH, and more."
        />
        <FeatureCard
          icon={<CreditCard className="h-8 w-8 text-blue-600" />}
          title="Fast & Secure UPI"
          description="Send and receive money instantly from any bank account using UPI."
        />

        <FeatureCard
          icon={<Gift className="h-8 w-8 text-blue-600" />}
          title="Rewards & Cashback"
          description="Earn guaranteed cashback and exciting rewards on every transaction."
        />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, name, title }) => (
  <blockquote className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <footer className="text-sm font-semibold text-gray-900">
      {name}
      <cite className="block text-gray-500 font-normal not-italic">{title}</cite>
    </footer>
  </blockquote>
);

const TestimonialSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          quote="Paytm has simplified my life. From utility bills to booking movie tickets, everything is just a tap away."
          name="Priya Sharma"
          title="Freelancer, Mumbai"
        />
        <TestimonialCard
          quote="The UPI feature is lightning fast and the best part is the secure banking experience with the Paytm Payments Bank."
          name="Rohan Verma"
          title="Software Engineer, Bangalore"
        />
        <TestimonialCard
          quote="The cashback and rewards are genuinely good. It feels great to save money while spending!"
          name="Anjali Singh"
          title="Student, Delhi"
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8 mb-8">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-300 transition duration-150">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Partner with Us</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Blog</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Contact Us</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Mobile Recharge</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Fastag</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Utility Bills</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Movie Tickets</a></li>
          </ul>
        </div>

        {/* Financial Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Financial Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Paytm Bank</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Paytm Money</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Insurance</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Credit Score</a></li>
          </ul>
        </div>

        {/* Consumer/Business */}
        <div className="col-span-2 md:col-span-2">
          <h4 className="text-lg font-semibold mb-4 text-blue-400">For Business & Merchant</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Paytm for Business</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">Merchant Solutions</a></li>
            <li><a href="#" className="hover:text-blue-300 transition duration-150">POS Devices</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} One97 Communications Ltd.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Home = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        {/* You can add more sections like Investment, Credit, etc. here */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;