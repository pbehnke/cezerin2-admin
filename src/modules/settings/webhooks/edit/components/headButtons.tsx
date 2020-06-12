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
    props.onDelete(props.webhook.id)
  }

  const { webhook } = props
  const webhookName =
    webhook && webhook.url && webhook.url.length > 0 ? webhook.url : "Draft"

  if (webhook) {
    return (
      <>
        <IconButton
          touch
          tooltipPosition="bottom-left"
          tooltip={messages.actions_delete}
          onClick={openDelete}
        >
          <FontIcon color="#fff" className="material-icons">
            delete
          </FontIcon>
        </IconButton>
        <DeleteConfirmation
          open={openDelete}
          isSingle
          itemsCount={1}
          itemName={webhookName}
          onCancel={closeDelete}
          onDelete={deletePage}
        />
      </>
    )
  }
  return null
}

export default Buttons
