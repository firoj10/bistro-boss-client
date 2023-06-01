

const Secret = () => {
    return (
        <div>
            <h1>Secret</h1>
        </div>
    );
};

export default Secret;


const updateUserProfile = (name, photo)=>{
    return updateProfile(auth, currentUser,{
displayName:name, photoUrl:photo
    });
  
}