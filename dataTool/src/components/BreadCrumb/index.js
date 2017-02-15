import {connect} from 'react-redux';

import BreadCrumb from './component';

const mapStateToProps = (state, props) => {
  return {
    dataSources: state.dataSources,
  };
};

export default connect(mapStateToProps)(BreadCrumb);
