import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mDtP = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
});

export default connect(null, mDtP)(SignupForm);