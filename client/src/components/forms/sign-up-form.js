import React from "react";
import { StyledFormWrapper } from "./styles";
import Header from "./components/header";
import { AuthBody } from "./components/body";
import Footer from "./components/footer";
import { useUI } from "../../context";

function SignUpForm() {
  const { setSignUpFormOpen, setLogInFormOpen } = useUI();
  return (
    <StyledFormWrapper>
      <Header title="Sign Up" closeForm={() => setSignUpFormOpen(false)} />
      <AuthBody signup={true} closeForm={() => setSignUpFormOpen(false)} />
      <Footer
        text={"Already a user?"}
        btnText="Log In"
        openOtherForm={() => {
          setSignUpFormOpen(false);
          setLogInFormOpen(true);
        }}
      />
    </StyledFormWrapper>
  );
}

export default SignUpForm;
