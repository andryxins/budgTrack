import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from './HomePage';

const MSTP = (state: any) => ({
  user: state.user,
});

export default withRouter(connect(MSTP)(HomePage));
