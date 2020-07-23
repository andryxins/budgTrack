import { connect } from 'react-redux';
import AuthorisationPage from './AuthorisationPage';

const MSTP = (state: any) => ({
  user: state.user,
});

export default connect(MSTP)(AuthorisationPage);
