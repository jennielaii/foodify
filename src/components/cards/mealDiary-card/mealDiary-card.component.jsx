import {
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React, { useState } from "react";
import { mealTypes } from "../../../constants/mealTypes";
import {
  DeleteButton,
  UpdateButton,
  UpdatedButton,
} from "../../buttons/buttons.component";
import CustomCard from "../../custom-card/custom.card.component";
import CustomTitle from "../../custom-title/custom-title.component";
import {
  FormWrapper,
  HeaderWrapper,
  QuantityWrapper,
  ResultWrapper,
  useStyles,
} from "./mealDiary-card.styles";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import {
  removeMealCard,
  updateMealCard,
} from "../../../store/meal-diary/mealdiary.actions";
import { connect } from "react-redux";
import {
  CarbohydrateField,
  DateField,
  FatField,
  MealTypeField,
  ProteinField,
} from "../../mealdiary-form-fields/mealdiary-form-fields.component";

const MealDiaryCard = ({ card, removeCard, editCard }) => {
  const { id, date, mealType, totalCal, nutrients } = card;

  const classess = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState({
    id,
    date,
    mealType,
    carbo: nutrients[0].grams,
    protein: nutrients[1].grams,
    fat: nutrients[2].grams,
  });

  const inputChangeHandler = (props) => (e) => {
    setValues({ ...values, [props]: e.target.value });
  };

  return (
    <CustomCard>
      {!isEditing ? (
        <CardContent>
          <HeaderWrapper>
            <CustomTitle color="primary" variant="h6">
              {date}
            </CustomTitle>
            <CustomTitle
              className={classess.mealType}
              variant="h6"
              style={{ backgroundColor: `${mealTypes[mealType].color}` }}
            >
              {mealType}
            </CustomTitle>
          </HeaderWrapper>
          <QuantityWrapper>
            {nutrients.map((each) => (
              <CustomTitle key={Math.random()} variant="subtitle1">
                {`${each.name} : ${each.grams}g : ${each.percentage}%`}
              </CustomTitle>
            ))}
          </QuantityWrapper>
          <ResultWrapper>
            <CustomTitle className={classess.total} variant="subtitle1">
              {`Total Calorie Intake is ${totalCal} kcl`}
            </CustomTitle>
            <List>
              {nutrients.map((each) => (
                <ListItem key={Math.random()}>
                  <ListItemIcon>
                    {each.mood === "good" && (
                      <SentimentVerySatisfiedIcon
                        className={classess.goodIcon}
                      />
                    )}
                    {each.mood === "bad" && (
                      <SentimentVeryDissatisfiedIcon
                        className={classess.badIcon}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={each.review} />
                </ListItem>
              ))}
            </List>
          </ResultWrapper>
        </CardContent>
      ) : (
        <FormWrapper>
          <DateField
            onChange={inputChangeHandler("date")}
            value={values.date}
          />
          <MealTypeField
            onChange={inputChangeHandler("mealType")}
            value={values.mealType}
          />
          <CarbohydrateField
            onChange={inputChangeHandler("carbo")}
            value={values.carbo}
          />
          <ProteinField
            onChange={inputChangeHandler("protein")}
            value={values.protein}
          />
          <FatField onChange={inputChangeHandler("fat")} value={values.fat} />
        </FormWrapper>
      )}

      <CardActions>
        {isEditing ? (
          <UpdatedButton
            onClick={() => {
              setIsEditing(!isEditing);
              editCard(values);
            }}
          />
        ) : (
          <UpdateButton onClick={() => setIsEditing(!isEditing)} />
        )}
        <DeleteButton onClick={() => removeCard(card)} />
      </CardActions>
    </CustomCard>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCard: (item) => dispatch(removeMealCard(item)),
  editCard: (item) => dispatch(updateMealCard(item)),
});
export default connect(null, mapDispatchToProps)(MealDiaryCard);
