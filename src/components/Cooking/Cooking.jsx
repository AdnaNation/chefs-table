import PropTypes from 'prop-types';
const Cooking = ({cooking}) => {
    const {recipe_name, preparing_time, calories} = cooking;
    return (
        <div className='flex items-center bg-[#28282808]'>
            <table className='table '>
            
            <tr>
           <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
          </tr>
            </table>

            <button className="btn bg-[#0BE58A] rounded-full">Preparing</button>
        </div>
    );
};

Cooking.propTypes ={
    cooking: PropTypes.object
}
export default Cooking;