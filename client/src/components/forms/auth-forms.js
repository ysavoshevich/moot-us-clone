import React from "react";
import { useScreenSize, useUI } from "../../context";
import LogInForm from "./log-in-form";
import SignUpForm from "./sign-up-form";
import { Dialog } from "@material-ui/core";

function AuthForms() {
  const { small } = useScreenSize();
  const {
    setSignUpFormOpen,
    setLogInFormOpen,
    signUpFormOpen,
    logInFormOpen
  } = useUI();
  return (
    <>
      <Dialog
        open={signUpFormOpen}
        onClose={() => setSignUpFormOpen(false)}
        fullScreen={small}>
        <SignUpForm />
      </Dialog>
      <Dialog
        open={logInFormOpen}
        onClose={() => setLogInFormOpen(false)}
        fullScreen={small}>
        <LogInForm />
      </Dialog>
    </>
  );
}

export default AuthForms;
