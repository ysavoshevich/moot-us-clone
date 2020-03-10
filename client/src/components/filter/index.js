import React from "react";
import styled from "styled-components";

import {
  gameOptions,
  platformOptions,
  regionOptions
} from "../../util/options";

import { makeStyles } from "@material-ui/core/styles";
import { Select, MenuItem } from "@material-ui/core";

const StyledFilter = styled.div`
  display: flex;
  background-color: #2b3259;
  height: 37px;
  padding: 5px;
  transition: none;
  svg {
    color: white;
  }
`;

const useStyles = makeStyles(theme => ({
  Select: {
    height: "100%",
    width: "100%",
    position: "relative",
    color: "white",
    cursor: "pointer",
    "&:before": {
      borderColor: "white",
      border: "none"
    },
    "&:hover:not(.Mui-disabled):before": {
      borderColor: "white",
      border: "none"
    },
    "&:after": {
      borderColor: "white",
      border: "none"
    },
    "&:hover": {
      borderColor: "white",
      border: "none"
    },
    icon: {
      fill: "white"
    }
  },
  selectMenu: {
    backgroundColor: "#2b3259",
    transform: "translateY(44px)",
    borderRadius: 0
  },
  MenuItem: {
    color: "white",
    backgroundColor: "#2b3259",
    "&:hover": {
      backgroundColor: "#1f2641"
    },
    height: "100%"
  },
  FormControl: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  }
}));

const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "#2b3259",
      transform: "translateY(44px)",
      borderRadius: 0
    }
  }
};

function Filter({ values, handleChange }) {
  const classes = useStyles();
  return (
    <StyledFilter>
      <Select
        displayEmpty
        className={classes.Select}
        value={values.game}
        onChange={handleChange("game")}
        MenuProps={MenuProps}
        renderValue={() => {
          if (values.game) {
            return (
              <p
                style={{
                  textAlign: "center",
                  opacity: "0.8"
                }}>
                {
                  gameOptions[
                    gameOptions.findIndex(opt => opt.value === values.game)
                  ].label
                }
              </p>
            );
          }
          return <p style={{ textAlign: "center", opacity: "0.8" }}>Game</p>;
        }}>
        {gameOptions.map(opt => (
          <MenuItem
            value={opt.value}
            key={opt.value}
            className={classes.MenuItem}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      <Select
        displayEmpty
        className={classes.Select}
        value={values.region}
        onChange={handleChange("region")}
        renderValue={() => {
          if (values.region) {
            return (
              <p style={{ textAlign: "center", opacity: "0.8" }}>
                {
                  regionOptions[
                    regionOptions.findIndex(opt => opt.value === values.region)
                  ].label
                }
              </p>
            );
          }
          return <p style={{ textAlign: "center", opacity: "0.8" }}>Region</p>;
        }}
        MenuProps={MenuProps}>
        {regionOptions.map(opt => (
          <MenuItem
            value={opt.value}
            key={opt.value}
            className={classes.MenuItem}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      <Select
        displayEmpty
        className={classes.Select}
        value={values.platform}
        onChange={handleChange("platform")}
        renderValue={() => {
          if (values.platform) {
            return (
              <p style={{ textAlign: "center", opacity: "0.8" }}>
                {
                  platformOptions[
                    platformOptions.findIndex(
                      opt => opt.value === values.platform
                    )
                  ].label
                }
              </p>
            );
          }
          return (
            <p style={{ textAlign: "center", opacity: "0.8" }}>Platform</p>
          );
        }}
        MenuProps={MenuProps}>
        {platformOptions.map(opt => (
          <MenuItem
            value={opt.value}
            key={opt.value}
            className={classes.MenuItem}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </StyledFilter>
  );
}

export default Filter;
