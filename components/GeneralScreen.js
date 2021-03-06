import React, {Component, Fragment} from 'react'

export default class GeneralScreen extends Component {
  state = {
    showEmail: false,
    email: 'zenamax@gmail.com'
  };

  render() {
    return (
      <Fragment>
        <div className="cover-container">
          <div className="background-cover"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm text-center text-white">
                <h1 className="font-weight-light">TOEL DEV</h1>
                <h5 className="font-weight-light">Умная разработка приложений с использованием</h5>
                <h5 className="font-weight-light">Ruby on Rails, React Native и DevOps</h5>
                <br/>
                { this.state.showEmail ? (
                  <h5 className="font-weight-light">
                    zenamax@gmail.com
                  </h5>
                ) : (
                  <div
                    className="btn btn-light text-uppercase font-weight-light"
                    onClick={() => this.setState({showEmail: true})}>
                    СВЯЗАТЬСЯ
                  </div>
                )
                }
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .cover-container {
            background-image: url(../static/images/coding.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          body, html {
            height: 100%;
          }
          .background-cover {
            position: absolute;
            height: 100vh;
            width: 100%;
            background:rgba(0,0,0,.75);
            opacity: .5;
          }
    `}</style>
      </Fragment>
    );
  }
}
