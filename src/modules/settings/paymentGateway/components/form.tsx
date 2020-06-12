import Dialog from "@material-ui/core/Dialog"
import FlatButton from "material-ui/FlatButton"
import RaisedButton from "material-ui/RaisedButton"
import React, { useEffect, useState } from "react"
import { reduxForm } from "redux-form"
import messages from "../../../../lib/text"
import { AVAILABLE_PAYMENT_GATEWAYS } from "../availablePaymentGateways"
import GatewaySettings from "./gatewaySettings"
import style from "./style.module.sass"

const EditPaymentGatewayForm = (props: Readonly<{}>) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    props.onLoad()
  }, [])

  //componentWillReceiveProps(nextProps) {
  useEffect(nextProps => {
    if (nextProps.gateway !== props.gateway) {
      props.onLoad(nextProps.gateway)
    }
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const { handleSubmit, pristine, submitting, initialValues } = props
  const gatewayDetails = AVAILABLE_PAYMENT_GATEWAYS.find(
    item => item.key === props.gateway
  )

  if (props.gateway && props.gateway.length > 0) {
    return (
      <>
        <RaisedButton
          onClick={handleOpen}
          label={messages.drawer_settings}
          style={{ margin: "15px 0 30px 0" }}
        />

        <Dialog
          title={gatewayDetails.name}
          modal={false}
          open={open}
          autoScrollBodyContent
          contentStyle={{ width: 600 }}
          onRequestClose={handleClose}
        >
          <div style={{ width: "500px", margin: "25px" }}>
            <form
              onSubmit={handleSubmit}
              style={{ display: "initial", width: "100%" }}
            >
              <GatewaySettings gateway={props.gateway} />

              <div className={style.buttons}>
                <FlatButton label={messages.cancel} onClick={handleClose} />
                <FlatButton
                  label={messages.save}
                  primary
                  type="submit"
                  onClick={handleClose}
                  style={{ marginLeft: 12 }}
                  disabled={pristine || submitting}
                />
              </div>
            </form>
          </div>
        </Dialog>
      </>
    )
  }
  return null
}

export default reduxForm({
  form: "EditPaymentGatewayForm",
  enableReinitialize: true,
})(EditPaymentGatewayForm)
