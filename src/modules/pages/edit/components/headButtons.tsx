import FontIcon from "@material-ui/core/FontIcon"
import IconButton from "@material-ui/core/IconButton"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"

const Buttons = props => {
  const [openDelete, setOpenDelete] = useState(false)

  const closeDelete = () => {
    setOpenDelete(false)
  }

  const deletePage = () => {
    setOpenDelete(false)
    props.onDelete(props.page.id)
  }

  const { page } = props
  const pageName =
    page && page.meta_title && page.meta_title.length > 0
      ? page.meta_title
      : "Draft"

  if (page && !page.is_system) {
    return (
      <>
        <IconButton
          touch
          tooltipPosition="bottom-left"
          tooltip={messages.actions_delete}
          onClick={() => setOpenDelete(true)}
        >
          <FontIcon color="#fff" className="material-icons">
            delete
          </FontIcon>
        </IconButton>
        {page.enabled && (
          <a href={page.url} target="_blank">
            <IconButton
              touch
              tooltipPosition="bottom-left"
              tooltip={messages.viewOnWebsite}
            >
              <FontIcon color="#fff" className="material-icons">
                open_in_new
              </FontIcon>
            </IconButton>
          </a>
        )}
        <DeleteConfirmation
          open={openDelete}
          isSingle
          itemsCount={1}
          itemName={pageName}
          onCancel={closeDelete}
          onDelete={deletePage}
        />
      </>
    )
  }
  return null
}

export default Buttons
