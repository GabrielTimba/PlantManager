import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackRoute from './stack_routes';

const Routes=()=>(
  <NavigationContainer>
    <StackRoute/>
  </NavigationContainer>
  
);

export default Routes;