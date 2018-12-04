import React, { Component } from 'react';
import { host, getData } from './Api Functions';
// import { cors } from 'cors';
// import express from 'express';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      getData: this.props
    };
  }

  componentDidMount() {
    //app.use(allowCrossDomain);
    // const app = express();

    // app.use(cors());
    // app.get('/products/:id', function(req, res, next) {
    //   res.json({ msg: 'This is CORS-enabled for all origins!' });
    // });
    // app.listen(80, function() {
    //   console.log('CORS-enabled web server listening on port 80');
    // });

    fetch(host, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        authorization:
          'Basic NzVmMDMzNWMtNzc3NS00NGU3LThhZjktYWUxMzU5OGU2ZTkxOlg2ZUY3bkczcFU4a0o3dEs0alA1ckUzbFA2ckoycFQ4ckc3ZlM3aEw0dUswbEc3dVI3',
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        scope: '/api'
      })
    })
      .then(response => console.log(response.json()))
      .then(data => {
        //getData(data);
        console.log(data);
      })
      .catch(error => {
        console.log('error:', error);
      });
  }

  render() {
    return (
      <div>
        <p>Api</p>
      </div>
    );
  }
}

export default Auth;
