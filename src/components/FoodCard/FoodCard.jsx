import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {_id,name, image, price, recipe}= item;
    const {user}=useContext(AuthContext)
    const [, refetch]= useCart()
    const navigate = useNavigate()
    const location = useLocation()


    const handleAddToCard = item =>{
console.log(item)
if(user && user.email){
  const cardItem = {menuItemId: _id, name, image, price, email:user.email}
  fetch('http://localhost:5000/carts',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(cardItem)
  })
  .then(res =>res.json())
  .then(data=>{

  if(data.insertedId){
  //update the cart items
  refetch()
    Swal.fire({
      
      position: 'top-end',
      icon: 'success',
      title: 'Food added on the card',
      showConfirmButton: false,
      timer: 1500
    })
  }
})
}else{
   
Swal.fire({
  title: 'Please login to order the food',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Login now!'
}).then((result) => {
  if (result.isConfirmed) {
   
      navigate('/login', {state:{ from: location }})
  
  }
})
}
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="absolute right-0 text-white bg-slate-900 mr-4 mt-4 p-2">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCard(item)} className="btn btn-outline bg-slate-200 border-0 border-orange-400 border-b-4">add to card</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;