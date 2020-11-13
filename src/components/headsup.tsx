import React from "react"
import { Segment } from 'semantic-ui-react';

interface Props {
  title: String;
}

const HeadsUp: React.FunctionComponent<Props> = ({ title, children }) => (
  <div style={{ margin: "10px" }}>
    <Segment inverted color='orange'>
      <h4>{title}</h4>
      {children}
    </Segment>
  </div>
)

export default HeadsUp
