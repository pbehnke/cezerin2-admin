import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import FlatButton from "material-ui/FlatButton"
import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import GroupSelect from "../../../../modules/customerGroups/select"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"
import Search from "./search"

const Buttons = (props: Readonly<{}>) => {
  const [groupId, setGroupId] = useState(null)
  const [openSetGroup, setOpenSetGroup] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const showSetGroup = () => {
    setOpenSetGroup(true)
  }

  const showDelete = () => {
    setOpenDelete(true)
  }

  const closeSetGroup = () => {
    setOpenSetGroup(false)
  }

  const closeDelete = () => {
    setOpenDelete(false)
  }

  const deleteCustomers = () => {
    setOpenDelete(false)
    onDelete()
  }

  const saveSetGroup = () => {
    setOpenSetGroup(false)
    onSetGroup(groupId)
  }

  const selectSetGroup = groupId => {
    setGroupId(groupId)
  }

  const {
    search,
    setSearch,
    selectedCount,
    onDelete,
    onCreate,
    onEdit,
    onSetGroup,
  } = props

  return (
    <>
      <Search value={search} setSearch={setSearch} />
      {selectedCount > 0 && (
        <>
          {selectedCount == 1 && (
            <IconButton
              touch={true}
              tooltipPosition="bottom-left"
              tooltip={messages.actions_edit}
              onClick={onEdit}
            >
              <FontIcon color="#fff" className="material-icons">
                edit
              </FontIcon>
            </IconButton>
          )}
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
          <IconButton
            touch
            tooltipPosition="bottom-left"
            tooltip={messages.customers_setGroup}
            onClick={showSetGroup}
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
            onDelete={deleteCustomers}
          />
          <Dialog
            title={messages.customers_setGroup}
            modal={false}
            open={openSetGroup}
            onRequestClose={closeSetGroup}
            autoScrollBodyContent
          >
            <GroupSelect
              onSelect={selectSetGroup}
              selectedId={groupId}
              showRoot
              showAll={false}
            />
            <DialogActions>
              <FlatButton
                label={messages.cancel}
                onClick={closeSetGroup}
                style={{ marginRight: 10 }}
              />
              <FlatButton
                label={messages.save}
                primary
                keyboardFocused
                onClick={saveSetGroup}
              />
            </DialogActions>
          </Dialog>
        </>
      )}
      {selectedCount < 1 && (
        <IconButton
          touch={true}
          tooltipPosition="bottom-left"
          tooltip={messages.customers_titleAdd}
          onClick={onCreate}
        >
          <FontIcon color="#fff" className="material-icons">
            add
          </FontIcon>
        </IconButton>
      )}
    </>
  )
}

export default Buttons
