/**
 * Created by kfirerez on 03/11/2016.
 */
import Q from 'q';
import ModelsServices from './ModelsServices';

export default class ModelsActions {
  static ACTIONS_TYPES = {
    ACTION_LOAD_MODELS: 'ACTION_LOAD_MODELS'
  };
  
  static loadModels (dispatch) {
   
    return ModelsServices.loadModels()
      .then((response) => {
        dispatch({
          type: ModelsActions.ACTIONS_TYPES.ACTION_LOAD_MODELS,
          payload: response.data || []
        });
      })
  }
}
