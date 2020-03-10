import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import PostTop from "./components/post-top";
import PostBottom from "./components/post-bottom";

const StyledPost = styled(animated.div)`
  margin-top: 15px;
  width: 100%;
`;

function Post({ post, deletePost }) {
  const props = useSpring({
    opacity: 1,
    transform: "translate3d(0,0px,0)",
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" }
  });

  return (
    <StyledPost style={props}>
      <PostTop post={post} deletePost={deletePost} />
      <PostBottom post={post} />
    </StyledPost>
  );
}

export default Post;
