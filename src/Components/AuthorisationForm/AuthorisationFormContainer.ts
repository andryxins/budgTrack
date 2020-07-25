import { connect } from 'react-redux';
import AuthorisationForm from './AuthorisationForm';

const MDTP = (dispatch: any) => ({
  onlogIn: (authData: any) => dispatch(console.log),
});

export default connect(null, MDTP)(AuthorisationForm);
