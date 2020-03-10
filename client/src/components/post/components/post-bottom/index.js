import React from "react";
import styled from "styled-components";
import moment from "moment";

import Tag from "../tag";
import theme from "../../../../theme";

const StyledPostBottom = styled.div`
  padding: 11px 20px 18px;
  background-color: ${theme.blueLight};
`;

const StyledDescription = styled.p`
  max-height: 16px;
  margin-top: 11px;
  font-size: 14px;
  color: #e9e9ea;
  line-height: 1.21;
  display: block;
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  word-break: normal;
  word-wrap: normal;
`;

const StyledTimestamp = styled.span`
  display: inline-block;
  font-size: 12px;
  color: #6f7284;
  vertical-align: top;
  margin-top: 7px;
`;

function PostBottom({
  post: { description, createdAt, game, platform, region }
}) {
  return (
    <StyledPostBottom>
      <div>
        <Tag text={game} />
        <Tag text={platform} />
        <Tag text={region} />
      </div>
      <StyledDescription>{description}</StyledDescription>
      <StyledTimestamp>{moment(createdAt).fromNow()}</StyledTimestamp>
    </StyledPostBottom>
  );
}

export default PostBottom;
