import react,{useState} from 'react';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import './FormValidation.css';

//validation schema using yup

const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required').min(3,'firstName name should be at least 3 characters'),
    lastName: yup.string().required('Last name is required').min(3,'lastName should be at least 3 characters'),
    email: yup.string().email('Invalid email').nullable().required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    age: yup.number().typeError('Age must be a number').positive('Age must be a positive number').integer('Age must be an integer').required('Age is required'),
    website: yup.string().url('Invalid URL format').required('Website is required'),
});

//form validation 

function FormWithValidation() {
    const [formData, setFormData] = useState(null);
    const {register, handleSubmit, formState: {errors},reset} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues :{
            email: null,
            password: null,
        }
    });

//reset the initial form after submitting
const onSubmit = (data) => {
    console.log(data);
    setFormData(data); // Store submitted data
    reset();}

return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="form-container" noValidate>
    <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" {...register('firstName')} className={errors.firstName ? 'error' : ''} />
        {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
    </div>

    <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" {...register('lastName')} className={errors.lastName ? 'error' : ''} />
        {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
    </div>

    <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" {...register('email')} className={errors.email ? 'error' : ''} />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
    </div>

    <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" {...register('password')} className={errors.password ? 'error' : ''} />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
    </div>

    <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" {...register('confirmPassword')} className={errors.confirmPassword ? 'error' : ''} />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
    </div>

    <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" {...register('age')} className={errors.age ? 'error' : ''} />
        {errors.age && <p className="error-message">{errors.age.message}</p>}
    </div>

    <div className="form-group">
        <label htmlFor="website">Website:</label>
        <input type="text" id="website" name="website" {...register('website')} className={errors.website ? 'error' : ''} />
        {errors.website && <p className="error-message">{errors.website.message}</p>}
    </div>

    <button type="submit" className="submit-btn">Submit</button>
</form>

{formData && (
                <div className="table-container">
                    <h2>Submitted Data</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(formData).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
</div>

    );
};
export default FormWithValidation;
