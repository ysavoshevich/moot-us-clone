import forwardProps from "../../util/forwardProps";
import {
  StyledClearButton,
  StyledMenuButton,
  StyledGoogleButton,
  StyledAuthFormEnterButton,
  StyledOpenAuthFormBtn,
  StyledToolbarButton,
  StyledEditButton,
  StyledCloseButton,
  StyledWritePostButton,
  StyledJoinButton,
  StyledDeleteButton
} from "./styles";

export const ClearInputButton = props =>
  forwardProps(StyledClearButton, {
    ...props,
    className: "fas fa-times-circle"
  });

export const MessageButton = props =>
  forwardProps(props.toolbar ? StyledToolbarButton : StyledMenuButton, {
    ...props,
    className: "fas fa-envelope"
  });

export const BellButton = props =>
  forwardProps(props.toolbar ? StyledToolbarButton : StyledMenuButton, {
    ...props,
    className: "fas fa-bell"
  });

export const NewsButton = props =>
  forwardProps(props.toolbar ? StyledToolbarButton : StyledMenuButton, {
    ...props,
    className: "fas fa-newspaper"
  });

export const CalendarButton = props =>
  forwardProps(props.toolbar ? StyledToolbarButton : StyledMenuButton, {
    ...props,
    className: "fas fa-calendar-alt"
  });

export const TrophyButton = props =>
  forwardProps(props.toolbar ? StyledToolbarButton : StyledMenuButton, {
    ...props,
    className: "fas fa-trophy"
  });

export const GoogleButton = props =>
  forwardProps(StyledGoogleButton, {
    ...props
  });

export const AuthFormEnterButton = props =>
  forwardProps(StyledAuthFormEnterButton, { ...props });

export const OpenAuthFormButton = props =>
  forwardProps(StyledOpenAuthFormBtn, { ...props });

export const CloseButton = props =>
  forwardProps(StyledCloseButton, { ...props, className: "fas fa-times" });

export const HomeButton = props =>
  forwardProps(StyledToolbarButton, { ...props, className: "fas fa-home" });

export const ProfileButton = props =>
  forwardProps(StyledToolbarButton, { ...props, className: "fas fa-user" });

export const EditButton = props => forwardProps(StyledEditButton, { ...props });

export const SaveButton = props => forwardProps(StyledEditButton, { ...props });

export const LogoutButton = props =>
  forwardProps(StyledEditButton, { ...props });

export const CancelButton = props =>
  forwardProps(StyledEditButton, { ...props });

export const WritePostButton = props =>
  forwardProps(StyledWritePostButton, { ...props });

export const JoinButton = props => forwardProps(StyledJoinButton, { ...props });

export const DeleteButton = props =>
  forwardProps(StyledDeleteButton, { ...props });
