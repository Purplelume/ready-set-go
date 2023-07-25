// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { CREATE_USER } from '../utils/mutations';

// function Signup(props) {
//   const [formState, setFormState] = useState({ userName: '', email: '', password: '' });
//   const [createUser, { error }] = useMutation(CREATE_USER);

//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const { data } = await createUser({
//         variables: {
//           input: {
//             userName: formState.userName,
//             email: formState.email,
//             password: formState.password,
//           },
//         },
//       });

//       const token = data.createUser.token;
//       const { userName, email } = data.createUser.user;

//       // Save the user data to localStorage
//       Auth.login(token, { userName, email });

//       // Display success message
//       setSuccessMessage('Profile created!');
//       setErrorMessage('');
//     } catch (error) {
//       // Display error message
//       setErrorMessage('Error creating profile. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="container my-1">
//       <Link to="/login">← Go to Login</Link>

//       <h2>Signup</h2>
//       {successMessage && <p className="success-message">{successMessage}</p>}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <form onSubmit={handleFormSubmit}>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="userName">Username:</label>
//           <input
//             placeholder="Username"
//             name="userName"
//             type="text"
//             id="userName"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="email">Email:</label>
//           <input
//             placeholder="youremail@test.com"
//             name="email"
//             type="email"
//             id="email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             placeholder="******"
//             name="password"
//             type="password"
//             id="pwd"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row flex-end">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;
