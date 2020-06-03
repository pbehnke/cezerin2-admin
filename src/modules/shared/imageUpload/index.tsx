import Paper from "@material-ui/core/Paper"
import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import Snackbar from "material-ui/Snackbar"
import React from "react"
import Dropzone from "react-dropzone"
import messages from "../../../lib/text"
import style from "./style.css"

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePreview: this.props.imageUrl,
    }
  }

  onDelete = () => {
    this.setState({
      imagePreview: null,
    })
    this.props.onDelete()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imagePreview: nextProps.imageUrl,
    })
  }

  onDrop = files => {
    const form = new FormData()
    form.append("file", files[0])
    this.props.onUpload(form)
  }

  render() {
    const { imagePreview } = this.state
    const { uploading } = this.props

    const hasPreview = imagePreview !== null && imagePreview !== ""
    const previewIsFileUrl = hasPreview ? imagePreview.startsWith("http") : null

    let htmlPreview = (
      <div className={style.noImage}>
        <FontIcon
          style={{ fontSize: 90, color: "#cccccc" }}
          className="material-icons"
        >
          photo_camera
        </FontIcon>
        <div className={style.dropText}>{messages.help_dropHere}</div>
      </div>
    )

    if (hasPreview && previewIsFileUrl) {
      htmlPreview = <img src={imagePreview} />
    } else if (hasPreview && !previewIsFileUrl) {
      htmlPreview = <img src={imagePreview} />
    }

    return (
      <Paper zDepth={1} rounded={false} style={{ width: 200 }}>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
          disableClick={hasPreview}
          accept="image/*"
          ref={node => {
            this.dropzone = node
          }}
          style={{}}
          className={style.dropzone}
          activeClassName={style.dropzoneActive}
          rejectClassName={style.dropzoneReject}
        >
          {({ getRootProps, getInputProps }) =>
            this.props.children != null ? (
              this.props.children
            ) : (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={style.preview}>{htmlPreview}</div>
              </div>
            )
          }
        </Dropzone>

        <div className={style.footer}>
          <IconButton
            touch
            tooltip={messages.actions_upload}
            onClick={() => {
              this.dropzone.open()
            }}
            tooltipPosition="top-right"
          >
            <FontIcon color="rgba(0,0,0,0.5)" className="material-icons">
              file_upload
            </FontIcon>
          </IconButton>
          {hasPreview && (
            <IconButton
              touch
              tooltip={messages.actions_delete}
              onClick={this.onDelete}
              tooltipPosition="top-right"
            >
              <FontIcon color="rgba(0,0,0,0.5)" className="material-icons">
                delete
              </FontIcon>
            </IconButton>
          )}
        </div>
        <Snackbar open={uploading} message={messages.messages_uploading} />
      </Paper>
    )
  }
}
export default ImageUpload
