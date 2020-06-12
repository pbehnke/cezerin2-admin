import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import FlatButton from "material-ui/FlatButton"
import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import CategorySelect from "../../../../modules/productCategories/select"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"
import Search from "./search"

const Buttons = (props: Readonly<{}>) => {
  const [categoryIdMoveTo, setCategoryIdMoveTo] = useState(null)
  const [openMoveTo, setOpenMoveTo] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const showMoveTo = () => {
    setOpenMoveTo(true)
  }

  const openDeletes = () => {
    setOpenDelete(true)
  }

  const closeDelete = () => {
    setOpenDelete(false)
  }

  const deleteProduct = () => {
    setOpenDelete(false)
    onDelete()
  }

  const closeMoveTo = () => {
    setOpenMoveTo(false)
  }

  const saveMoveTo = () => {
    setOpenMoveTo(false)
    onMoveTo(categoryIdMoveTo)
  }

  const selectMoveTo = categoryId => {
    setCategoryIdMoveTo(categoryId)
  }

  const {
    search,
    setSearch,
    selectedCount,
    onDelete,
    onCreate,
    onMoveTo,
  } = props

  return (
    <>
      <Search value={search} setSearch={setSearch} />
      {selectedCount > 0 && (
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
          <IconButton
            touch
            tooltipPosition="bottom-left"
            tooltip={messages.actions_moveTo}
            onClick={showMoveTo}
          >
            <FontIcon color="#fff" className="material-icons">
              folder
            </FontIcon>
          </IconButton>
          <DeleteConfirmation
            open={openDelete}
            isSingle={false}
            itemsCount={selectedCount}
            onCancel={closeDelete}
            onDelete={deleteProduct}
          />
          <Dialog
            title={messages.actions_moveTo}
            modal={false}
            open={openMoveTo}
            onRequestClose={closeMoveTo}
            autoScrollBodyContent
          >
            <CategorySelect
              onSelect={selectMoveTo}
              selectedId={categoryIdMoveTo}
              opened
            />
            <DialogActions>
              <FlatButton
                label={messages.cancel}
                onClick={closeMoveTo}
                style={{ marginRight: 10 }}
              />
              <FlatButton
                label={messages.actions_moveHere}
                primary
                keyboardFocused
                onClick={saveMoveTo}
              />
            </DialogActions>
          </Dialog>
        </>
      )}
      <IconButton
        touch
        tooltipPosition="bottom-left"
        tooltip={messages.addProduct}
        onClick={onCreate}
      >
        <FontIcon color="#fff" className="material-icons">
          add
        </FontIcon>
      </IconButton>
    </>
  )
}

export default Buttons
