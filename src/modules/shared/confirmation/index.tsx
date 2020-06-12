import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import FlatButton from "material-ui/FlatButton"
import React, { useEffect, useState } from "react"

const ConfirmationDialog = (
  props: Readonly<{
    open: boolean
    title: string
    description: string
    submitLabel: string
    cancelLabel: string
    modal: boolean
    onSubmit: Function
    onCancel: Function
  }>
) => {
  const [open, setOpen] = useState(props.open)

  //componentWillReceiveProps(nextProps) {
  useEffect(nextProps => {
    if (open !== nextProps.open) {
      setOpen(nextProps.open)
    }
  }, [])

  const handleCancel = () => {
    setOpen(false)
    if (onCancel) {
      onCancel()
    }
  }

  const handleSubmit = () => {
    setOpen(false)
    if (onSubmit) {
      onSubmit()
    }
  }

  const {
    title,
    description,
    submitLabel,
    cancelLabel,
    modal = false,
    onSubmit,
    onCancel,
  } = props

  return (
    <Dialog
      title={title}
      modal={modal}
      open={open}
      onRequestClose={handleCancel}
    >
      <div style={{ wordWrap: "break-word" }}>{description}</div>
      <DialogActions>
        <FlatButton
          label={cancelLabel}
          onClick={handleCancel}
          style={{ marginRight: 10 }}
        />
        <FlatButton
          label={submitLabel}
          primary
          keyboardFocused
          onClick={handleSubmit}
        />
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialog
