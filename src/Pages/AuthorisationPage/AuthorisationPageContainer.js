import { connect } from 'react-redux';
import AuthorisationPage from './AuthorisationPage';

const MSTP = state => ({
  user: state.user,
});

export default connect(MSTP)(AuthorisationPage);
