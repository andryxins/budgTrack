import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllTransactions } from '../../Redux/transactionsSlice/transactionsSlice';
import HomePage from './HomePage';

const MSTP = state => ({
  user: state.user,
  transactions: state.transactions,
});

const MDTP = dispatch => ({
  getAllTransactions: () => dispatch(getAllTransactions()),
});

export default withRouter(connect(MSTP, MDTP)(HomePage));
