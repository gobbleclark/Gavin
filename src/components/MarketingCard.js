import React from 'react';
import {Header, List, Image} from 'semantic-ui-react';

const MarketingCard = () => {

    return (
        <List style={{backgroundColor: '#eeeeee'}}>
    <List.Item>
      <Image size='small' avatar src='https://www.trzcacak.rs/myfile/detail/368-3685063_digital-marketing-consultancymade-in-scotland-wordpress-icon.png' />
      <List.Content>
        <List.Header style={{color: '#393e46'}} as='h2'>SOCIAL MEDIA MARKETING</List.Header>
        <List.Description>
            From establishing a social media presence on most popular companies, creating sharbale and targeted content, creating ad campaigns, to determining ROI. In regards to SMM, I have a strong foundation. 
        </List.Description>
      </List.Content>
    </List.Item>
    <hr />
    <List.Item>
      <Image size ='small' avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJav8wUO7F2LHCroZtxfIHWXyeLKRMiz05meoFr1V5bteiwoJ-' />
      <List.Content>
        <List.Header style={{color: '#393e46'}} as='h2'>DATA ANALYSIS</List.Header>
        <List.Description>
            A huge beleiver that if you don't know how to understand the data that your company is generating, then it is worthless. I love to ability to follow the numbers that can then lead me into my creative side to create a marketing stratgy based on true data.
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
  
    )
}



export default MarketingCard;