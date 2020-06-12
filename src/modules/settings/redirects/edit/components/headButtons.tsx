import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import React, { useState } from "react"
import messages from "../../../../../lib/text"
import DeleteConfirmation from "../../../../../modules/shared/deleteConfirmation"

const Buttons = (props: Readonly<{}>) => {
  const [openDelete, setOpenDelete] = useState(false)

  const openDeletes = () => {
    setOpenDelete(true)
  }

  const closeDelete = () => {
    setOpenDelete(false)
  }

  const deletePage = () => {
    setOpenDelete(false)
    onDelete(props.redirect.id)
  }

  const { redirect, onDelete } = props
  const redirectName =
    redirect && redirect.from && redirect.from.length > 0
      ? redirect.from
      : "Draft"

  if (redirect) {
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
          itemName={redirectName}
          onCancel={closeDelete}
          onDelete={deletePage}
        />
      </>
    )
  }
  return null
}

export default Buttons
