import React from 'react';
import {Header, List, Image} from 'semantic-ui-react';

const SoftwareCard = () => {

    return (
        <>
<List style={{backgroundColor: '#eeeeee'}}>
    <List.Item>
      <Image size='small' avatar src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png' />
      <List.Content>
        <List.Header style={{color: '#393e46'}} as='h2'>REACT</List.Header>
        <List.Description>
            React is my favorite. This is my favorite language for any frontend project. I am always up to date on the latest technologies and am currently moving all my projects to the new HOOKS.
        </List.Description>
      </List.Content>
    </List.Item>
    <hr />
    <List.Item>
      <Image size ='small' avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFvgcqCpIyMbyHrllfDXNFrNjJyRTyLenm8jyHbTuea0CI4zV8g' />
      <List.Content>
        <List.Header style={{color: '#393e46'}} as='h2'>RUBY ON RAILS</List.Header>
        <List.Description>
          This is currenlty the backend language that I am most experienced in. My favorite thing about Ruby on Rails in the chance to use active record, but as well have the capability to create custom SQL into my ruby models. I feel like it's a fast and effective way to build out a backend.
        </List.Description>
      </List.Content>
    </List.Item>
    <hr />
    <List.Item>
      <Image size ='small'  avatar src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png'
        style={{float: 'center'}}
       />
      <List.Content>
        <List.Header style={{color: '#393e46'}} as='h2'>JAVASCRIPT</List.Header>
        <List.Description>
            By learning Javascript frist, this helped me learn React quickly. Learning and utlizing javascript helps me understand and learn other languages quickly. My next frontend language that I want to tackle is Angular. 
        </List.Description>
      </List.Content>
    </List.Item>
    <hr />
    <List.Item>
      <Image size='small' avatar src='http://postgresapp.com/img/PostgresAppIconLarge.png' />
      <List.Content>
        <List.Header style={{color: '#393e46'}} as='h2'>PostgreSQL</List.Header>
        <List.Description>
          I have expericne in adding custom SQL into my Rails / React projects using PostgresQL. I enjoy this as it helps me bring any data I need into certain components.
        </List.Description>
      </List.Content>
    </List.Item>
    <hr />
</List>
  
    </>
    )
}




export default SoftwareCard;