import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const{recipe_img, recipe_name, short_description, ingredients}= recipe
    return (
        <div>
            
            <div className="card  bg-base-100 shadow-xl p-4">
  <figure><img className='w-full' src={recipe_img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <hr />
    {
      ingredients.map((ingredient, idx)=> <span key={idx}>{ingredient}</span>)
    }


    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
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