import * as React from 'react';
import { createConsumer } from "@rails/actioncable";

// Don't forget to add action_cable_meta_tag to your layout
const cableUrl = document.querySelector(`meta[name="action-cable-url"]`).getAttribute('content');

const PostsChannel = ({ children, connectionStateChanged, postReceived })=> {
  const createChannel = () => {
    return createConsumer(cableUrl).subscriptions.create({
      channel: "PostsChannel",
    }, {
      connected: handleConnected,
      disconnected: handleDisconnected,
      received: handleReceived,
    })
  }

  const handleConnected = () => connectionStateChanged(true)
  const handleDisconnected = () => connectionStateChanged(false)
  const handleReceived = (post) => postReceived(post)

  React.useEffect(() => {
    const channel = createChannel()
    return () => channel.unsubscribe()
  }, []);

  return (<>{children}</>)
}

export default PostsChannel;