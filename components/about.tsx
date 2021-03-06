import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {' '}
              <img
                loading="lazy"
                src="img/block-paving.jpeg"
                width="520"
                className="img-responsive"
                alt="Image of beehive"
              />{' '}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  {/* @ts-expect-error */}
                  {this.props.data ? this.props.data.paragraph : 'loading...'}
                </p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {/* @ts-expect-error */}
                      {this.props.data
                        ? // @ts-expect-error
                          this.props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {/* @ts-expect-error */}
                      {this.props.data
                        ? // @ts-expect-error
                          this.props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : 'loading'}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
