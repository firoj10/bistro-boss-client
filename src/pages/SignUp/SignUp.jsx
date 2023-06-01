import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate();


  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const logedUser = result.user;
        console.log(logedUser)
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const saveUser = {name: data.name, email: data.email}
            fetch('http://localhost:5000/users',{
              method: "POST",
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res=> res.json())
            .then(data=>{
              if(data.insertedId){
                reset()
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'User created',
                  showConfirmButton: false,
                  timer: 1500
                })
                navigate('/')
              }
            })
            // console.log('user profile updated')
           
          })
          .catch(error => console.log(error))

      })
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="Photo Url" {...register("photo", { required: true })} name="photo" className="input input-bordered" />
                {errors.photo && <span className="text-red-600">photo is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-4]{7,}$/
                })} className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">number uppercase lowercase spacal characters</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <input className="btn btn-primary" type="submit" value="Sign up" />
              </div>
            </form>
            <p><small>Alrady have an account? <Link to="/login">Login</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;