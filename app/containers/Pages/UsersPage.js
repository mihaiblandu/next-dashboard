import { connect } from "react-redux";
import { authSelectors } from "../../state/auth";
import UsersPageComponent from "../../components/Pages/UsersPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const UsersPage = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(UsersPageComponent);

export default UsersPage;