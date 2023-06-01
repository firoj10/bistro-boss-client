
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem copy/MenuItem";
// import MenuItem from "../../Shared/MenuItem/MenuItem";
// import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu()
    const popular = menu.filter(item=> item.category== "popular");

    return (
        <section className="mb-12">
         <SectionTitle 
         heading="From Our Menu"
         subHeading="popural Items"
         >
         </SectionTitle>
         <div className="grid md:grid-cols-2 gap-4">
     {
        popular.map(item=> <MenuItem
        key={item._id}
        item={item}
        ></MenuItem>)
     }
         </div>
        </section>
            
       
    );
};

export default PopularMenu;