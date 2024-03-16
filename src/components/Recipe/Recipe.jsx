import PropTypes from 'prop-types';
import { AiOutlineFire } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";

const Recipe = ({recipe}) => {
    const{recipe_img, recipe_name, short_description, ingredients, preparing_time, calories}= recipe
    return (
        <div>
            
            <div className="card  bg-base-100 shadow-xl p-4">
  <figure><img className='w-full h-[220px]' src={recipe_img} alt="{recipe_name}" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-semibold">{recipe_name}</h2>
    <p className='text-sm text-[#878787]'>{short_description}</p>
    <hr />
    <h2 className='my-4'>Ingredients: {ingredients.length}</h2>
   
    
     <div className='text-[#878787] my-4'>
     {
      ingredients.map((ingredient, idx)=> <span key={idx}><li>{ingredient}</li></span>)
    }

     </div>
    <hr />

    <div className='flex'>
      <p className='flex items-center gap-2'><IoMdTime></IoMdTime> {preparing_time} min</p>
      <p className='flex items-center gap-2'><AiOutlineFire></AiOutlineFire>{calories} calories</p>
    </div>
  
   


    <div className="card-actions">
      <button className="btn bg-[#0BE58A] rounded-full mt-5">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
        
    );
};

Recipe.propTypes ={
    recipe: PropTypes.object.isRequired
}

export default Recipe;