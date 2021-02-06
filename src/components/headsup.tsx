import React from "react"
import Segment from "./segment";
interface Props {
  title: String;
}

const HeadsUp: React.FunctionComponent<Props> = ({ title, children }) => (
  <div className="headsup" style={{ margin: "10px" }}>
    <Segment color='orange'>
      <h4>{title}</h4>
      {children}
    </Segment>
  </div>
)

export default HeadsUp
