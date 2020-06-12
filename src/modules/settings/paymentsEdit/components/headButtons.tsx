import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"

const Buttons = (props: Readonly<{}>) => {
  const [openDelete, setOpenDelete] = useState(false)

  const showDelete = () => {
    setOpenDelete(true)
  }

  const closeDelete = () => {
    setOpenDelete(false)
  }

  const deleteGroup = () => {
    setOpenDelete(false)
    onDelete(props.paymentMethod.id)
  }

  const { paymentMethod, onDelete } = props
  const methodName =
    paymentMethod && paymentMethod.name && paymentMethod.name.length > 0
      ? paymentMethod.name
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
