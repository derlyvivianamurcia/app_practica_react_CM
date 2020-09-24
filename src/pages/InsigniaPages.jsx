import React from "react";
import { Link } from "react-router-dom";

class InsigniaPages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container"></div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/insignianueva" className="btn btn-primary">
              insignia inicial
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InsigniaPages;
