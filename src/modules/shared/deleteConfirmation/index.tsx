import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import FlatButton from "material-ui/FlatButton"
import React, { useState } from "react"
import messages from "../../../lib/text"

const ConfirmationDialog = (props: Readonly<{}>) => {
  const [open, setOpen] = useState(props.open)

  //componentWillReceiveProps(nextProps) {
  useEffect(
    nextProps => {
      if (open !== nextProps.open) {
        setOpen(nextProps.open)
      }
    },
    [props]
  )

  const close = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    close()
    if (props.onCancel) {
      props.onCancel()
    }
  }

  const handleDelete = () => {
    close()
    if (props.onDelete) {
      props.onDelete()
    }
  }

  const { isSingle = true, itemsCount = 0, itemName = "" } = props

  const title = isSingle
    ? messages.singleDeleteTitle.replace("{name}", itemName)
    : messages.multipleDeleteTitle.replace("{count}", itemsCount)

  const description = isSingle
    ? messages.singleDeleteDescription
    : messages.multipleDeleteDescription.replace("{count}", itemsCount)

  return (
    <Dialog
      title={title}
      modal={false}
      open={open}
      onRequestClose={handleCancel}
      contentStyle={{ maxWidth: 540 }}
      titleStyle={{ fontSize: "18px", lineHeight: "28px" }}
    >
      <div style={{ wordWrap: "break-word", width: "500px", margin: "25px" }}>
        {description}
      </div>
      <DialogActions>
        <FlatButton
          label={messages.cancel}
          onClick={handleCancel}
          style={{ marginRight: 10 }}
        />
        <FlatButton
          label={messages.actions_delete}
          primary
          keyboardFocused
          onClick={handleDelete}
        />
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialog
