import PropTypes from "prop-types";
const CookingCurrent = ({ cooking, listItem }) => {
  const { recipe_name, preparing_time, calories } = cooking;

  return (
    <tr>
      <td>{Number(listItem + 1)}</td>
      <td>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
    </tr>
  );
};

CookingCurrent.propTypes = {
  cooking: PropTypes.object,
  handlePrepare: PropTypes.func,
  listItem: PropTypes.number,
};
export default CookingCurrent;
