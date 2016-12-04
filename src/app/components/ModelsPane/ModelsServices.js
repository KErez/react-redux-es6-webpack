/**
 * Created by kfirerez on 16/11/2016.
 */
import Q from 'q';
import axios from 'axios';

export default class ModelsServices {
  static get baseURL() {
    return 'http://localhost.rollout.io:4000';
  }
  
  static loadModels() {
    return axios.get('http://localhost.rollout.io:4000/api/models');
  }
}