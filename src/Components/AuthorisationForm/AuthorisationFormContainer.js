import { connect } from 'react-redux';
import { logIn } from '../../Redux/userSlice/userSlice';
import AuthorisationForm from './AuthorisationForm';

const MDTP = (dispatch) => ({
  onlogIn: (authData) => dispatch(logIn(authData)),
});

export default connect(null, MDTP)(AuthorisationForm);
