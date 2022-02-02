import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = (props) => {
  const { id, dish, background, notes} = props.recipe;

  return(<tr key={id}>
      <td>{dish}</td>
      <td>{background}</td>
      <td>{notes}</td>
      <td>
        <Link to={`/recipes/${id}`} className="view">
          <input type="button" className="btn btn-secondary" value="View"/>
        </Link>
      </td>
  </tr>);
}

export default RecipeItem;