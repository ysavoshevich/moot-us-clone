import React from "react";
import { StyledFormWrapper } from "./styles";
import Header from "./components/header";
import { NewPostBody } from "./components/body";

function NewPostForm({ closeForm }) {
  return (
    <StyledFormWrapper>
      <Header title="New Post" closeForm={closeForm} />
      <NewPostBody closeForm={closeForm} />
    </StyledFormWrapper>
  );
}

export default NewPostForm;
