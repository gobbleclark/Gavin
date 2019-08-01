import React from 'react';
import { Menu, Image } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'


const Navbar = () => {

    const Instagram = () => {

    }
    return (
        <>
        <Menu
        inverted 
        stackable
        style={{ width: "auto"}}
        >
          <Link to = '/'>
            <Menu.Item
                name= 'Home'
                id= '/'
            />
          </Link>
          <Link to = '/projects'>
            <Menu.Item
                name= 'Projects'
                id= '/projects'
            />
          </Link>
          <Link to = '/skills'>
            <Menu.Item
                name= 'Skills'
                id= '/skills'
            />
          </Link>
          <Link to = '/hobbies'>
            <Menu.Item
                name= 'Hobbies'
                id= '/hobbies'
                color='black'
            />
          </Link>
            <Menu.Menu position = 'right'>
                <Menu.Item >
                    <Image 
                    style = {{
                        width: '25px', 
                        height: '25px',
                        }}
                    src ='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png' />
                </Menu.Item>
                <Menu.Item >
                    <Image 
                    style = {{
                        width: '25px', 
                        height: '25px',
                        }}
                    src ='https://facebookbrand.com/wp-content/themes/fb-branding/assets/images/fb-logo.png?v2' />
                </Menu.Item>
                <Menu.Item >
                    <Image 
                    style = {{
                        width: '25px', 
                        height: '25px',
                        }}
                    src ='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' />
                </Menu.Item>


            </Menu.Menu>
           
        </Menu>
        </>
    )
}

export default Navbar;