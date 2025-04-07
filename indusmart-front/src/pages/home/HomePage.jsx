import { Link } from "react-router-dom";
import OurProducts from "./OurProducts";
import OurClients from "./OurClients";
import FooterCard from "../../components/FooterCard";

const HomePage = () => {
  return (
    <div>
      <section className='row container mt-2' style={{ height: "100%" }}>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center px-3 py-3'>
          <h1 className='text-black'>Leading Industrial Suppliers in Nepal</h1>
          <p className='text-black fs-6'>
            IndustroMart is your trusted destination for sourcing high-quality
            industrial products and equipment across Nepal. We connect
            businesses with reliable suppliers, offering a wide range of tools,
            machinery, safety gear, electricals, construction materials, and
            more. With a commitment to quality, affordability, and fast
            delivery, IndustroMart is powering industries of all sizes to grow
            and succeed. Whether you're a manufacturer, contractor, or
            distributor, we simplify your procurement process by bringing the
            best of the industrial market to your fingertips.
          </p>
        </div>
        <div className='col-12 col-md-6 p-3'>
          <img
            className='h-100 w-100 object-fit-contain'
            src='https://minarindustrial.in/img/slide-1.jpg'
            alt=''
          />
        </div>

        <div>
          <Link className='btn btn-md btn-dark mt-5' to='/about'>
            Learn More
          </Link>
        </div>
      </section>

      <section
        className='row container p-0'
        id='about'
        style={{ height: "100%" }}
      >
        <div className='col-12 col-md-6 p-3'>
          <img
            className='h-100 w-100 object-fit-contain'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalrfJqhS14w4X5z1BJHEB2lU1t8G_TR8LZQ&s'
            alt=''
          />
        </div>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-start px-3 py-3'>
          <h1 className='text-black mb-0'>About IndustroMart</h1>
          <p className='mt-0 pt-0'>
            - Your Trusted Source for Technical Supplies
          </p>
          <p className='text-black fs-6'>
            At IndustroMart, we are redefining the way industrial products are
            sourced in Nepal. Founded with a vision to streamline and modernize
            the industrial supply chain, we serve as a one-stop platform for
            businesses seeking reliable, high-quality industrial tools,
            equipment, and materials.
            <br />
            Our goal is to bridge the gap between industrial suppliers and
            buyers by offering a transparent, convenient, and efficient online
            marketplace. From construction and manufacturing to electrical and
            safety solutions, we bring together trusted brands and verified
            vendors to ensure that our customers receive only the best.
            <br />
            We are driven by a commitment to quality, customer satisfaction, and
            innovation. With user-friendly navigation, responsive support, and a
            growing catalog of products, IndustroMart is helping businesses
            across Nepal save time, reduce costs, and operate with confidence.
            <br />
            Join us on our journey to build Nepal’s most trusted industrial
            supply network.
          </p>
        </div>

        <div className='w-100 d-flex justify-content-end'>
          <Link className='btn btn-md btn-dark mt-3 px-5' to='/contact-us'>
            Get a Quote
          </Link>
        </div>
      </section>

      <section className='container'>
        <div className='container'>
          <h1 className='text-center text-black'>Our Products</h1>
          <p className='text-center text-black'>
            Explore our wide range of industrial products and solutions.
          </p>
          <div className='row mt-5'>
            {/* Product cards will go here */}
            <OurProducts />
          </div>
          <div className='w-100  d-flex justify-content-center align-items-center'>
            <Link className='btn btn-sm btn-dark mt-5' to='/products'>
              See All Products
            </Link>
          </div>
        </div>
      </section>
      <section className='container'>
        <OurClients />
      </section>
      <FooterCard />
    </div>
  );
};
export default HomePage;
