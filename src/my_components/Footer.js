import React from 'react'

export const Footer = () => {


    let footerStyle = {

        position: 'relative',
        width: '100%',
        top: '100vh'
    }
    return (
        <div>
            <footer class="page-footer font-small bg-dark text-light" style={footerStyle}>
            <div class="footer-copyright text-center py-2">© 2021 Copyright: MyTodos.com
            </div>
            </footer>
        </div>
    )
}
