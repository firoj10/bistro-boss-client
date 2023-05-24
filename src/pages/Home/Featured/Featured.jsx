
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredimg from './../../../assets/home/featured.jpg'
import './Fetured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <SectionTitle
            subHeading="check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-80 pb-20 pt-12 px-36'>
            <div>
                <img src={featuredimg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 20, 2029</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque.
                     Quod aut fuga facere neque nisi minus maxime nemo fugiat vero, exercitationem 
                     explicabo veniam ipsa cum reprehenderit deserunt repellendus placeat nesciunt 
                    quia magni asperiores voluptatibus expedita. Vel veniam sed obcaecati?</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white ">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;