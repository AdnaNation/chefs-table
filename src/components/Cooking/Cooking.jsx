import PropTypes from "prop-types";
const Cooking = ({ cooking, handlePrepare, listItem }) => {
  const { recipe_name, preparing_time, calories } = cooking;

  return (
    <>
      <div className="flex items-center w-full bg-[#28282808] rounded-xl text-[#282828B3]">
        <table className="table">
          <tbody>
            <tr>
              <td className="px-1">{Number(listItem + 1)}</td>
              <td className="pl-1">{recipe_name}</td>
              <td className="pl-1">{preparing_time} minutes</td>
              <td className="pl-1">{calories} calories</td>

              <th className="px-1">
                <button
                  onClick={() => handlePrepare(cooking)}
                  className="btn bg-[#0BE58A] rounded-full"
                >
                  Preparing
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Cooking.propTypes = {
  cooking: PropTypes.object,
  handlePrepare: PropTypes.func,
  listItem: PropTypes.number,
};
export default Cooking;
