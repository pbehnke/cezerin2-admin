import FontIcon from "@material-ui/core/FontIcon"
import { List, ListItem } from "@material-ui/core/List"
import Paper from "@material-ui/core/Paper"
import React from "react"
import { Link } from "react-router-dom"
import messages from "../../../../lib/text"

export default class ImportSettings extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const { importSettings } = this.props

    return (
      <>
        <Paper className="paper-box" zDepth={1}>
          <div style={{ width: "100%" }}>
            <List style={{ padding: 0 }}>
              <Link
                to="/settings/import/googlespreadsheet"
                style={{ textDecoration: "none" }}
              >
                <ListItem
                  rightIcon={
                    <FontIcon className="material-icons">
                      keyboard_arrow_right
                    </FontIcon>
                  }
                  primaryText={
                    <div className="row">
                      <div className="col-xs-6">
                        {messages.settings_spreadsheet}
                      </div>
                    </div>
                  }
                />
              </Link>
            </List>
          </div>
        </Paper>
      </>
    )
  }
}
