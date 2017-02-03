import React, { Component } from 'react';
import Helmet from 'react-helmet';

class AboutPage extends Component {
  render () {
    return (
      <div>
        <Helmet
          title='About MyGi'
          meta={[
            {"name": "description", "content": "About MyGi"},
            {"name": "keywords", "content": "gi, GI, Glycemic Index, glycemic index, GlycemicIndex, glycemicindex"},
          ]}
        />
      <h1>
          About MyGi
        </h1>
        <p>Some amazeballs info RIGHT here!</p>
      </div>
    )
  }
}

export default AboutPage;
