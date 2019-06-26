import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeader } from './styles';

class Landing extends React.Component {
  render() {
    return (
      <PageHeader>
        <h1 className="landing-header">Hello, Divvy!</h1>
        <div className="landing-header-line" />
        <h1 className="landing-header">Poor No More</h1>
        <h2 className="landing-sub-header">A Budget Tracking App To Help You Stay Rich</h2>
        <Link className="start-link" to="/dashboard">
          START BUDGETING
        </Link>
      </PageHeader>
    );
  }
}

export default Landing;
