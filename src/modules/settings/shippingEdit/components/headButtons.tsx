import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"

const Buttons = (props: Readonly<{}>) => {
  const [openDelete, setOpenDelete] = useState(false)

  const showDeletes = () => {
    setOpenDelete(true)
  }

  const closeDelete = () => {
    setOpenDelete(false)
  }

  const deleteGroup = () => {
    setOpenDelete(false)
    onDelete(props.shippingMethod.id)
  }

  const { shippingMethod, onDelete } = props
  const methodName =
    shippingMethod && shippingMethod.name && shippingMethod.name.length > 0
      ? shippingMethod.name
      : "Draft"

  return (
    <span>
      <IconButton
        touch
        tooltipPosition="bottom-left"
        tooltip={messages.actions_delete}
        onClick={showDelete}
      >
        <FontIcon color="#fff" className="material-icons">
          delete
        </FontIcon>
      </IconButton>
      <DeleteConfirmation
        open={openDelete}
        isSingle
        itemsCount={1}
        itemName={methodName}
        onCancel={closeDelete}
        onDelete={deleteGroup}
      />
    </span>
  )
}

export default Buttons
