import Divider from "@material-ui/core/Divider"
import FontIcon from "@material-ui/core/FontIcon"
import { List } from "@material-ui/core/List"
import RaisedButton from "@material-ui/core/RaisedButton"
import React from "react"
import messages from "../../../../lib/text"
import Head from "./head"
import CustomersListItem from "./item"
import style from "./style.css"

export default class CustomersList extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const {
      items,
      selected,
      loadingItems,
      hasMore,
      onSelect,
      onSelectAll,
      loadMore,
      settings,
    } = this.props
    const rows = items.map((item, index) => (
      <CustomersListItem
        key={index}
        customer={item}
        selected={selected}
        onSelect={onSelect}
        settings={settings}
      />
    ))

    return (
      <>
        <List>
          <Head onSelectAll={onSelectAll} />
          <Divider />
          {rows}
          <div className={style.more}>
            <RaisedButton
              disabled={loadingItems || !hasMore}
              label={messages.actions_loadMore}
              labelPosition="before"
              primary={false}
              icon={<FontIcon className="material-icons">refresh</FontIcon>}
              onClick={loadMore}
            />
          </div>
        </List>
      </>
    )
  }
}
