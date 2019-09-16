import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import {removeTodo} from '../../actions/todo_actions';
import {receiveSteps} from "../../actions/steps_action";


const mapDispatchToProps = dispatch => {
  return ({
    removeTodo: (id) => dispatch(removeTodo(id)),
    receiveSteps: (steps) => dispatch(receiveSteps(steps)) 
  })
}

export default connect(null, mapDispatchToProps)(TodoDetailView)