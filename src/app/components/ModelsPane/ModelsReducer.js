/**
 * Created by kfirerez on 01/11/2016.
 */
import ModelsActions from './ModelsActions';

export default class ModelsReducer {
  static reducer (state = ['Users'], action) {
    switch (action.type) {
      case ModelsActions.ACTIONS_TYPES.ACTION_LOAD_MODELS:
        return action.payload;
    }
  
    return state;
  }
}
