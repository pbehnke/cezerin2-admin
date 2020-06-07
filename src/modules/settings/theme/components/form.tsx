import Paper from "@material-ui/core/Paper"
import Divider from "material-ui/Divider"
import RaisedButton from "material-ui/RaisedButton"
import React from "react"
import api from "../../../../lib/api"
import messages from "../../../../lib/text"
import ThemeSettings from "../../../../modules/settings/themeSettings"
import style from "./style.module.sass"

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: "pointer",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    opacity: 0,
  },
}

const Theme = props => {
  function onExportClick() {
    props.exportRequest()
    api.theme.export().then(({ json }) => {
      props.exportReceive()
      if (json.file) {
        window.location = json.file
      } else {
        alert(`Error: ${JSON.stringify(json)}`)
      }
    })
  }

  function onImportFileChoose(event) {
    props.installRequest()
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append("file", file)

    api.theme.install(formData)
  }

  const { exportInProcess, installInProcess } = props

  return (
    <>
      <Paper className="paper-box" zDepth={1}>
        <div className={style.innerBox}>
          <div className="row between-xs middle-xs">
            <div className="col-xs-6">
              {messages.settings_themeExportDesciption}
            </div>
            <div className="col-xs-4" style={{ textAlign: "right" }}>
              <RaisedButton
                label={
                  exportInProcess
                    ? messages.settings_themeExporting
                    : messages.settings_themeExport
                }
                disabled={exportInProcess || installInProcess}
                onClick={onExportClick}
                primary
              />
            </div>
          </div>
          <Divider
            style={{
              marginTop: 30,
              marginBottom: 30,
              marginLeft: -30,
              marginRight: -30,
            }}
          />
          <div className="row between-xs middle-xs">
            <div className="col-xs-6">
              {messages.settings_themeInstallDesciption}
            </div>
            <div className="col-xs-4" style={{ textAlign: "right" }}>
              <RaisedButton
                label={
                  installInProcess
                    ? messages.settings_themeInstalling
                    : messages.settings_themeInstall
                }
                disabled={installInProcess}
                labelPosition="before"
                containerElement="label"
                primary
              >
                <input
                  type="file"
                  onChange={onImportFileChoose}
                  disabled={installInProcess}
                  style={styles.exampleImageInput}
                />
              </RaisedButton>
            </div>
          </div>
        </div>
      </Paper>
      <ThemeSettings />
    </>
  )
}

export default Theme
