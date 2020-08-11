import { Action, createReducer, on } from '@ngrx/store';
import { FoodActions, FoodActionTypes } from '../actions/food.actions';
import { FoodItem } from '../../food.model';
import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from '@ngrx/entity';

export const foodFeatureKey = 'food';

export interface FoodState extends EntityState<FoodItem> {}

export const foodAdapter: EntityAdapter<FoodItem> = createEntityAdapter<
  FoodItem
>();

export const defaultFoodState: FoodState = {
  ids: [],
  entities: {},
};

export const initialState = foodAdapter.getInitialState(defaultFoodState);

export function FoodReducer(
  state = initialState,
  action: FoodActions
): FoodState {
  switch (action.type) {
    case FoodActionTypes.LoadFoods: {
      return { ...state };
    }

    case FoodActionTypes.LoadFoods_Success: {
      return foodAdapter.setAll(action.payload, {
        ...state,
      });
    }

    case FoodActionTypes.LoadFoods_Error: {
      return { ...state };
    }

    default:
      return state;
  }
}
