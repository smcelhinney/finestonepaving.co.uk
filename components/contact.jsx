import React, { Component } from 'react'
import dynamic from 'next/dynamic'

export default function Contact({ data }) {
  const Map = dynamic(() => import('../components/Map'), {
    loading: () => 'Loading...',
    ssr: false,
  })

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12 text-center">
            <div className="contact-item text-center">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {data ? data.address : 'loading'}
              </p>
            </div>

            <div className="contact-item text-center">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{' '}
                {data ? data.phone : 'loading'}
              </p>
            </div>
            <div className="contact-item text-center">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{' '}
                {data ? data.email : 'loading'}
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={data ? data.facebook : '/'}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>

                  {data.twitter && (
                    <li>
                      <a href={data ? data.twitter : '/'}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  )}
                  {data.youtube && (
                    <li>
                      <a href={data ? data.youtube : '/'}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2022 Copyright finestonepaving.co.uk. Design by{' '}
            <a href="https://appstruct.io" rel="nofollow">
              appstruct.io
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
