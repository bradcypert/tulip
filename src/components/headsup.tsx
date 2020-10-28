import React from "react"
import { Message } from 'rsuite';

interface Props {
  title: String;
}

const HeadsUp: React.FunctionComponent<Props> = ({ title, children }) => (
  <div style={{ margin: "10px" }}>
    <Message
      type="warning"
      title={title}
      description={children}
    />
  </div>
)

export default HeadsUp
