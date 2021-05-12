import React from 'react'

import LinkForm from './LinkForm'

export default function ManageLinkForm(props) {
    return <div>
        <LinkForm 
            on_submit={props.on_submit}
            text={props.text}
        />
        <button>Edit</button>
        <button>Delete</button>
    </div>
}