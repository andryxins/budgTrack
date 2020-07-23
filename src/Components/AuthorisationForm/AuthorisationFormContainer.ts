import { connect } from 'react-redux';
import { logIn } from '../../Redux/userSlice/userSlice';
import AuthorisationForm from './AuthorisationForm';

const MDTP = (dispatch: any) => ({
  onlogIn: (authData: any) => dispatch(logIn()),
});

export default connect(null, MDTP)(AuthorisationForm);
