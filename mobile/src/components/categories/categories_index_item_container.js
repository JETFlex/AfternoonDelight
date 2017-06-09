import { connect } from 'react-redux';
import CategoriesIndexItem from './category_index_item';
import { requestSingleCategory } from '../../actions/category_actions';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories,
    category: state.category,
    currentUser: state.session.currentUser,
    category_id: ownProps.data
});

const mapDispatchToProps = dispatch => ({
    requestSingleCategory: (id) => dispatch(requestSingleCategory(id)),
    logout: () => dispatch(logoutUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesIndexItem);

