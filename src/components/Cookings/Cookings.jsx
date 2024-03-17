import PropTypes from "prop-types";
import Cooking from "../Cooking/Cooking";
import CookingCurrent from "../Cooking/CookingCurrent";

const Cookings = ({
  cookings,
  handlePrepare,
  currentlyCooking,
  totalCount,
}) => {
  return (
    <div className=" w-full lg:w-1/3  mt-4 p-4">
      <div>
        <h2 className="text-center text-2xl font-semibold">
          Want to cook:{cookings.length}
        </h2>
        <hr />

        <div className="flex gap-14 p-4 justify-start text-[#878787]">
          <h2>Name</h2>
          <h2>Time</h2>
          <h2>Calories</h2>
        </div>

        {cookings.map((cooking, idx) => (
          <Cooking
            key={idx}
            listItem={idx}
            cooking={cooking}
            handlePrepare={handlePrepare}
          ></Cooking>
        ))}
        {cookings.length === 0 && (
          <p className="text-lg text-gray-400 font-semibold text-center">
            No Recipe Seleted
          </p>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h2 className="text-center text-2xl font-semibold">
          Currently cooking:{currentlyCooking.length}
        </h2>
        <hr />

        <div className="flex gap-14 p-4 ml-16 justify-start text-[#878787]">
          <h2>Name</h2>
          <h2>Time</h2>
          <h2>Calories</h2>
        </div>
        <div className=" flex items-center bg-[#28282808] rounded-xl text-[#282828B3] -mt-4">
          <table className="table">
            <tbody>
              <>
                {currentlyCooking.map((cooking, idx) => {
                  return (
                    <CookingCurrent
                      key={idx}
                      listItem={idx}
                      cooking={cooking}
                    ></CookingCurrent>
                  );
                })}
              </>
              {currentlyCooking && totalCount && (
                <tr>
                  <td> </td>
                  <td> </td>
                  <td>Total time = {totalCount.minute} minutes</td>
                  <td>Total calories = {totalCount.calories} calories</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
Cookings.propTypes = {
  cookings: PropTypes.array,
  currentlyCooking: PropTypes.array,
  handlePrepare: PropTypes.func,
  totalCount: PropTypes.object,
};

export default Cookings;
