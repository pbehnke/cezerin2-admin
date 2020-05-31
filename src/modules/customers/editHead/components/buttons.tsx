import FontIcon from "@material-ui/core/FontIcon"
import IconButton from "@material-ui/core/IconButton"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"

const Buttons = (props: { onDelete?: any; customer?: any }) => {
  const [openDelete, setOpenDelete] = useState(false)

  const openDeletes = () => {
    setOpenDelete(true)
  }

  const closeDelete = () => {
    setOpenDelete(false)
  }

  const deleteOrder = () => {
    closeDelete()
    props.onDelete()
  }

  const { customer } = props
  const customerName =
    customer && customer.full_name && customer.full_name.length > 0
      ? customer.full_name
      : "Draft"

  return (
    <>
      <IconButton
        touch
        tooltipPosition="bottom-left"
        tooltip={messages.actions_delete}
        onClick={openDeletes}
      >
        <FontIcon color="#fff" className="material-icons">
          delete
        </FontIcon>
      </IconButton>
      <DeleteConfirmation
        open={openDelete}
        isSingle
        itemsCount={1}
        itemName={customerName}
        onCancel={closeDelete}
        onDelete={props.onDelete}
      />
    </>
  )
}

export default Buttons
