import React from "react"
import {connect} from "react-redux";
import StepsList from "./steps_list"
import {receiveStep} from '../../actions/steps_action'

const mapStateToProps = ({steps, todo_id}) => {

	return({

	})
}

const mapDispatchToPrps = (dispatch) => {
	return ({
		receiveStep: ()
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(StepsList);