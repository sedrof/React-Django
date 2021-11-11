import React, { useState } from "react";
// import Paginations from 
import { Button } from 'semantic-ui-react'

const Paginations = () => (
  <div className="bttn">
    <Button attached='left' floated="right">Next</Button>
    <Button attached='right'>Prev</Button>
  </div>
)

export default Paginations;