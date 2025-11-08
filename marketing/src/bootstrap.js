import React from 'react'
import ReactDom from 'react-dom'
import App from './app'


function mount(el) {
    ReactDom.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if (devRoot) {
        // We are probably running in isolation
        mount(devRoot)
    }
}

export { mount }