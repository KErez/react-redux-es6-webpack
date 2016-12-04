/**
 * Created by kfirerez on 02/11/2016.
 */
import StagesAction from './StagesActions';

export default class StagesReducer {
  static reducer (state={}, action) {
    switch (action.type) {
      case StagesAction.ACTIONS_TYPES.ACTION_ADD_STAGE:
        // do something
        return action.payload;
    }
    return {
      scenario: [
        {
          id: '1',
          type: 'query',
          // src: 'mymongo1-id', // e.g. the source db connection that the db should run on (future feature)
          label: 'Users.find({age: 26})'
        },
        {
          id: '2',
          type: 'aggregate',
          label: 'Aggregate: id -> userId'
        },
        {
          id: '3',
          type: 'query',
          label: 'Groups.find({$or: {members: #userId}})'
        }
      ]
    };
  }
}
