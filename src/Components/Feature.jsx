import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
        <FeatureBox image={featureimage} title='Feature Analysis' content='Shows the trend of each parameter separately' />
            <FeatureBox image={featureimage1} title='WQI Prediction' content='Predicts the WQI and shows its trend'/>
            <FeatureBox image={featureimage2} title='Real Time Analysis' content='Real Time Monitoring and prediction'/>
        </div>
    </div>
  )
}

export default Feature;