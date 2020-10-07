import React, { Component } from 'react';

const MainContent = ({match}) => {
    return ( match.params.linkId );
}
 
export default MainContent;