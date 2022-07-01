import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/1.jpg'
import profile2 from './image/2.jpg'
import profile3 from './image/3.jpg'
import SingleComment from './SingleComment';
import UserCard from './UserCard';


const App = () => {
  return(
    <div className='ui comments'>

    <UserCard>
    <div>
    My name is Sara and i live in Istanbul @!!!!!!.
    </div>
    </UserCard>

    <UserCard>

        <SingleComment
        name='Alex'
        cdate='Today at 6:00AM'
        ctext='This was awsome'
        picture={profile1}
        />

        </UserCard>

<UserCard>
        <SingleComment
        name='Jack'
        cdate='Today at 8:00AM'
        ctext='Great content'
        picture={profile2}
        />

</UserCard>

        <SingleComment
        name='Sarah'
        cdate='Today at 9:00PM'
        ctext='Salute to you'
        picture={profile3}
        />






    </div>
    )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
