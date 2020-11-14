import React from "react"
import { Segment } from 'semantic-ui-react';

interface Props {
  title: String;
}

const HeadsUp: React.FunctionComponent<Props> = ({ title, children }) => (
  <div className="headsup" style={{ margin: "10px" }}>
    <Segment inverted color='green'>
      <h4>{title}</h4>
      {children}
    </Segment>
  </div>
)

export default HeadsUp
