import FontIcon from "@material-ui/core/FontIcon"
import IconButton from "@material-ui/core/IconButton"
import IconMenu from "@material-ui/core/IconMenu"
import MenuItem from "@material-ui/core/MenuItem"
import React from "react"
import { Link } from "react-router-dom"
import messages from "../../../../lib/text"

const WebStoreMenu = () => (
  <IconMenu
    iconButtonElement={
      <IconButton touch>
        <FontIcon color="#fff" className="material-icons">
          more_vert
        </FontIcon>
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem
      containerElement={<Link to="/apps/account" />}
      primaryText={messages.account}
    />
  </IconMenu>
)

export default WebStoreMenu
