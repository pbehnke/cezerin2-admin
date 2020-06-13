import Editor from "editorjs"
import React from "react"

const config = {
  inline: true,
  plugins: [
    "autolink lists link image charmap preview anchor",
    "searchreplace visualblocks code fullscreen",
    "media table paste code textcolor directionality",
  ],
  toolbar1:
    "image media | styleselect | bold italic bullist numlist link alignleft aligncenter alignright alignjustify",
  toolbar2:
    "undo redo | forecolor paste removeformat table | outdent indent | preview code",
}

const Editor = props => {
  const onChange = e => {
    const content = e.target.getContent()
    //setState({ value: content })
    props.input.onChange(content)
  }

  return <Editor onChange={onChange} />
}

export default Editor
