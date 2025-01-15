import React from "react";

const UserContext = React.createContext();

export default UserContext;
// provider is required when we need to access context
// provider is wrapped around the function call and inside that scope all elements have the access of context.

/* <UserContext>
    <login/>
        <card>
          <data/>
        <card/>
    <UserContext/>

*/
