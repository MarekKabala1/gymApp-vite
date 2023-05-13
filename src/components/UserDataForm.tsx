import React from 'react';
import { ActionFunction, Form, useNavigate } from 'react-router-dom';
import { DbUserData } from '@/types/Types';
import { toast } from 'react-toastify';
import { error } from 'console';

const UserDataForm = (): JSX.Element | null => {
	return (
		<Form className='form_wrapper' method='post' action='/dashboard/form'>
			<label className='form_label' htmlFor='userName'>
				User Name
				<input
					className='form_input'
					type='text'
					name='userName'
					aria-label='User Name'
					required
				/>
			</label>
			<label className='form_label' htmlFor='height'>
				Enter your Height
				<input
					className='form_input'
					type='number'
					name='height'
					aria-label='Enter Height'
					inputMode='decimal'
					step='0.1'
					required
				/>
			</label>
			<label className='form_label' htmlFor='weight'>
				Enter your weight
				<input
					className='form_input'
					type='number'
					name='weight'
					aria-label='Enter Weight'
					inputMode='decimal'
					step='0.1'
					required
				/>
			</label>
			<label className='form_label' htmlFor='gender'>
				Select your Gender
				<select
					className='form_input'
					name='gender'
					aria-label='Select Gender'
					required>
					<optgroup label='Select your Gender'>
						<option value='Male'>Male</option>
						<option value='Female'>Female</option>
						<option value='Other'>Other</option>
					</optgroup>
				</select>
			</label>
			<button className='btn btn_small' type='submit'>
				Submit
			</button>
		</Form>
	);
};

export const userDataFormAction: ActionFunction = async ({ request }) => {
	const navigate = useNavigate();
	try {
		const userData = await request?.formData();
		const data = Object.fromEntries(userData);

		const submittedData: DbUserData = {
			userName: data.userName,
			height: data.height,
			weight: data.weight,
			gender: data.gender,
		};
		console.log(submittedData);
		navigate('/dashboard');

		return toast.success(`Hi ${data.userName} all Data submitted`);
	} catch (err) {
		return toast.error('Something went wrong refresh and rty again');
		console.log(err);
	}
};

export default UserDataForm;
