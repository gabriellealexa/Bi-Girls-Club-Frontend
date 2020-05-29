import React from 'react';
import Button from 'react-bootstrap/Button';

import MainCarousel from '../components/MainCarousel';

class Home extends React.Component {

  render() {
  return (
    <div className="App">
      <MainCarousel /><br /><br />
       This is welcome text.<br /><br />
       <Button variant="dark" href="/products">Shop Now</Button><br /><br />
       <hr />
       <small>© 2020 <a href="http://gabriellealexa.com">Gabrielle Alexa</a></small><br /><br />

    </div>
  );
}
}

export default Home;