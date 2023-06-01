
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from "./../../assets/shop/banner2.jpg"
import soupImg from "./../../assets/menu/soup-bg.jpg"
import saladImg from "./../../assets/menu/salad-bg.jpg"
import pizzaImg from "./../../assets/menu/pizza-bg.jpg"
import dessertImg from "./../../assets/menu/dessert-bg.jpeg"
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
    const [menu]= useMenu()
    const desserts = menu.filter(item=>item.category==="dessert");
    const soup = menu.filter(item=>item.category==="soup");
    const salad = menu.filter(item=>item.category==="salad");
    const pazza = menu.filter(item=>item.category==="pizza");
    const offered = menu.filter(item=>item.category==="offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
   <Cover img={menuImg} title="Our Menu"></Cover>
   <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
   <MenuCategory items={offered}></MenuCategory>
   {/* dessert menu items */}
   <MenuCategory
   items={desserts}
   title="dessert"
   img={dessertImg}
   ></MenuCategory>
   {/* pizza menu items */}
   <MenuCategory
   items={pazza}
   title="pizza"
   img={pizzaImg}
   ></MenuCategory>
   {/* soup menu items */}
   <MenuCategory
   items={soup}
   title="soup"
   img={soupImg}
   ></MenuCategory>
   {/* salad menu items */}
   <MenuCategory
   items={salad}
   title="salad"
   img={saladImg}
   ></MenuCategory>
        </div>
    );
};

export default Menu;