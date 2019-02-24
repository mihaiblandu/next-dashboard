import React from "react";
import { graphql } from "react-relay";
import { NextQueryRenderer } from "../app/providers/Relay";
import UserList, { pageSize, sortBy, sortDir } from "./UserListContainer";
import ErrorMessage from "../app/error/ErrorMessageContainer";

const defaultVariables = { first: pageSize, sortBy, sortDir };

export const query = graphql`
  query UsersPageQuery(
    $sortBy: UserSortBy
    $sortDir: UserSortDir
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    viewer {
      ...UserListContainer_viewer
        @arguments(
          sortBy: $sortBy
          sortDir: $sortDir
          first: $first
          after: $after
          last: $last
          before: $before
        )
    }
  }
`;

class UsersPage extends React.Component {
  static async getInitialProps({ statusCode, fetchQuery }) {
    if (statusCode === 200) await fetchQuery(query, defaultVariables);
  }

  render() {
    return (
      <NextQueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => {
          if (error) return <ErrorMessage error={error} />;
          if (!props) return null;
          return <UserList viewer={props.viewer} />;
        }}
      />
    );
  }
}

export default UsersPage;