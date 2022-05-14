import React, {useState} from "react";
import {useFormik} from "formik";

// const SimpleForm = () => {
//     const INITIAL_STATE = {
//         email: ""
//     }

//     const [formData, setFormData] = useState(INITIAL_STATE);
//     const [isValid, setIsValid] = useState(true);
//     const [isTouched, setIsTouched] = useState(false);
//     const handleChange = (e) => {
//         setIsTouched(true);
//         const {name, value} = e.target;
//         if(value === '') {
//             setIsValid(true);
//         } else {
//             setIsValid(false)
//         }

//         setFormData(data => ({
//             ...data,
//             [name]: value
//         }));
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault(true);
//         const { email } = formData;
//         alert(`Added you to mailing list, ${email}`)
//         setFormData(INITIAL_STATE)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <h3>Simple form validation</h3>
//             <label htmlFor="email">Email</label>
//             <input
//                 type="email"
//                 placeholder="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//             {isValid && isTouched && <span style={{color: 'red'}}>Email cannot be blank!</span>}
//             <button>Add me to list!</button>
//         </form>
//     )
// }

// export default SimpleForm;





const SignupForm=() => {
    const formik=useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values,null,2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm;