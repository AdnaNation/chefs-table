import PropTypes from 'prop-types';
const Cooking = ({cooking, handlePrepare}) => {
    const {recipe_name, preparing_time, calories} = cooking;

    return (
       <li className='list-decimal'>
         <div className='flex items-center bg-[#28282808] rounded-xl text-[#282828B3] -mt-4'>
            <table className='table '>
              
            <tr>
            
           <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
          </tr>
            </table>

            <button onClick={()=>handlePrepare(cooking.recipe_id)} className="btn bg-[#0BE58A] rounded-full">Preparing</button>
        </div>
       </li>
    );
};

Cooking.propTypes ={
    cooking: PropTypes.object,
    handlePrepare: PropTypes.func
}
export default Cooking;