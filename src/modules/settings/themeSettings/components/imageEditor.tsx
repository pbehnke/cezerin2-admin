import React from "react"
import api from "../../../../lib/api"
import ImageUpload from "../../../../modules/shared/imageUpload"

const ThemeImageUpload = (props: Readonly<{}>) => {
  onDelete = () => {
    const fileName = props.input.value
    api.theme.assets.deleteFile(fileName).then(() => {
      props.input.onChange("")
    })
  }

  onUpload = formData => {
    api.theme.assets.uploadFile(formData).then(({ status, json }) => {
      const imageUrl = json.url
      props.input.onChange(imageUrl)
    })
  }

  const { input, label } = props

  return (
    <>
      <p>{label}</p>
      <ImageUpload
        uploading={false}
        imageUrl={input.value}
        onDelete={onDelete}
        onUpload={onUpload}
      />
    </>
  )
}

export default ThemeImageUpload
