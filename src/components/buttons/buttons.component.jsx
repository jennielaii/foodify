import CustomIconButton from "../custom-icon-button/custom-icon-button.component";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import CustomButton from "../custom-button/custom-button.component";
export const DeleteButton = ({ onClick }) => {
  return (
    <CustomIconButton
      onClick={onClick}
      ariaLabel="remove"
      variant="contained"
      color="primary"
    >
      <DeleteIcon />
    </CustomIconButton>
  );
};
export const UpdateButton = ({ onClick }) => {
  return (
    <CustomIconButton
      onClick={onClick}
      ariaLabel="edit"
      variant="contained"
      color="primary"
    >
      <EditIcon />
    </CustomIconButton>
  );
};
export const UpdatedButton = ({ onClick }) => {
  return (
    <CustomIconButton
      onClick={onClick}
      ariaLabel="edit"
      variant="contained"
      color="primary"
    >
      <CheckCircleOutlineIcon />
    </CustomIconButton>
  );
};

export const ViewButton = ({ onClick }) => {
  return (
    <CustomButton
      onClick={onClick}
      variant="outlined"
      type="button"
      size="medium"
      color="secondary"
    >
      View
    </CustomButton>
  );
};
export const ViewRecipeButton = ({ onClick }) => {
  return (
    <CustomButton
      onClick={onClick}
      variant="contained"
      type="button"
      size="medium"
      color="secondary"
    >
      View Full Recipe
    </CustomButton>
  );
};
export const AddRemoveButton = ({ onClick, children }) => {
  return (
    <CustomButton
      onClick={onClick}
      variant="contained"
      type="button"
      size="medium"
      color="secondary"
    >
      {children}
    </CustomButton>
  );
};
