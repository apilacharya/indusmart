import FooterCard from "../../components/FooterCard";

const ContactUs = () => {
  return (
    <>
      <div className='container mb-5'>
        <div className='row mt-4'>
          <div className='col-12 col-md-6 p-3'>
            <div className='h-100 w-100'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9845362150922!2d85.31022657423689!3d27.71776372503417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e2bcf06be5%3A0xb3febee08a175fb7!2z4KSF4KSu4KWD4KSkIOCkleCljeCkr-CkvuCkruCljeCkquCkuA!5e0!3m2!1sne!2snp!4v1744022825335!5m2!1sne!2snp'
                className='h-100 w-100'
                style={{ border: 0 }}
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div>
              <h1 className='text-black mb-0'>Contact Us</h1>
              <p>If you have any questions, feel free to reach out!</p>
            </div>
            <form>
              <div className='form-group w-100'>
                <label htmlFor='name' className='form-label'>
                  Full Name:
                </label>
                <input
                  type='text'
                  className='form-control w-100'
                  id='name'
                  name='name'
                  required
                />
              </div>
              <div className='form-group w-100'>
                <label htmlFor='email' className='form-label'>
                  Email:
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  required
                />
              </div>
              <div className='form-group w-100'>
                <label htmlFor='message' className='form-label'>
                  Message:
                </label>
                <textarea
                  id='message'
                  className='form-control'
                  name='message'
                  required
                ></textarea>
              </div>
              <button type='submit' className='btn btn-md w-100 btn-dark'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterCard />
    </>
  );
};
export default ContactUs;
