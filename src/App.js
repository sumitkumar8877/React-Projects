import React from 'react';
import ProfileCard from './component/ProfileCard';

const App = () => {
  const users = [
    {
      name: 'Sumit Kumar',
      designation: 'Software Developer',
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: 'https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png'
    },
    {
      name: 'Abhishek Kumar',
      designation: 'Product Manager',
      jobDescription: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: 'https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png'
    },
    {
      name: 'Nidhi Panday',
      designation: 'Sales Executive',
      jobDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageSrc: 'https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png'
    }
  ];

  return (
    <div className="App">
      {users.map((user, index) => (
        <ProfileCard
          key={index}
          name={user.name}
          designation={user.designation}
          jobDescription={user.jobDescription}
          imageSrc={user.imageSrc}
        />
      ))}
    </div>
  );
};

export default App;
