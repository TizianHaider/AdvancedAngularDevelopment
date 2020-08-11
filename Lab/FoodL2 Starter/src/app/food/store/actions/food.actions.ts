import { Action } from '@ngrx/store';
import { FoodItem } from '../../food.model';

export enum FoodActionTypes {
  LoadFoods = '[Food] Load Foods',
  LoadFoods_Success = '[Food] LoadFoods_Success',
  LoadFoods_Error = '[Food] LoadFoods_Error',
}

export class LoadFoods implements Action {
  readonly type = FoodActionTypes.LoadFoods;
}

export class LoadFood_Success implements Action {
  readonly type = FoodActionTypes.LoadFoods_Success;
  constructor(public payload: FoodItem[]) {}
}

export class LoadFood_Error implements Action {
  readonly type = FoodActionTypes.LoadFoods_Error;
  constructor(public payload: Error) {}
}

export type FoodActions = LoadFoods | LoadFood_Success | LoadFood_Error;
