import PropTypes from 'prop-types';
import Cooking from '../Cooking/Cooking';
const Cookings = ({cookings}) => {
    return (
     <div className=" w-full lg:w-1/3 md:w-1/3 mt-4 p-4">
        <div>
            <h2 className="text-center text-2xl font-semibold">Want to cook:{cookings.length}</h2>
            <hr />

             <div className="flex gap-14 p-4 justify-start">
                <h2>Name</h2>
                <h2>Time</h2>
                <h2>Calories</h2>
            </div>
            
            {
            cookings.map((cooking, idx) => <Cooking key={idx} cooking={cooking}></Cooking>)
            }
        </div>
        <div>
        <h2 className="text-center text-2xl font-semibold">Currently cooking:0</h2>
            <hr />
        </div>
    </div>
    );
};
Cookings.propTypes={
    cookings: PropTypes.array
}

export default Cookings;