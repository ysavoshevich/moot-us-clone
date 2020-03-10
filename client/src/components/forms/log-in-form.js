import React from "react";
import { StyledFormWrapper } from "./styles";
import Header from "./components/header";
import { AuthBody } from "./components/body";
import Footer from "./components/footer";
import { useUI } from "../../context";

function LogInForm() {
  const { setSignUpFormOpen, setLogInFormOpen } = useUI();
  return (
    <StyledFormWrapper>
      <Header title="Log In" closeForm={() => setLogInFormOpen(false)} />
      <AuthBody signup={false} closeForm={() => setLogInFormOpen(false)} />
      <Footer
        text={"First time in this app?"}
        btnText="Sign Up"
        openOtherForm={() => {
          setSignUpFormOpen(true);
          setLogInFormOpen(false);
        }}
      />
    </StyledFormWrapper>
  );
}

export default LogInForm;
