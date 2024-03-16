import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const{recipe_img}= recipe
    return (
        <div>
            <img src={recipe_img} alt="" />
        </div>
    );
};

Recipe.propTypes ={
    recipe: PropTypes.object.isRequired
}

export default Recipe;