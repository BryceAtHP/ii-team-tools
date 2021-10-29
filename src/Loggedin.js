import React from 'react';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
Amplify.configure(awsExports)
function Loggedin() {
 return(
    <div>
        <AmplifySignOut/>
        <h1>This is what your user will see after they successfully log in!</h1>
    </div>
 )
}
export default withAuthenticator(Loggedin)