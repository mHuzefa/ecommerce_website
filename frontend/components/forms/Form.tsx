import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Box, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface FormProps {
	fields: { label: string; name: string; type: string; options?: string[] }[];
	initialValues: Record<string, any>;
	mutationFn: (data: any) => Promise<any>;
}

const Form: React.FC<FormProps> = ({ fields, initialValues, mutationFn }) => {
	const [formData, setFormData] = useState(initialValues);
	const queryClient = useQueryClient();	
	
	const mutation = useMutation({
		mutationFn: mutationFn,
		onSuccess: () => {
			queryClient.invalidateQueries(); // Invalidate cache to fetch updated data
		},
		onError: (error: any) => {
			console.error('Error:', error);
		}
	});

	useEffect(() => {
		setFormData(initialValues)
	},[initialValues]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name!]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutation.mutate(formData);
		setFormData(initialValues)
	};

	return (
		<Box component="form" onSubmit={handleSubmit}>
			{fields.map((field) => (
				<Box key={field.name} mb={2}>
					{field.type === 'select' ? (
						<FormControl fullWidth>
							<InputLabel>{field.label}</InputLabel>
							<Select
								name={field.name}
								value={formData[field.name] || ''}
								onChange={handleChange}
								fullWidth
							>
								{field.options?.map((option) => (
									<MenuItem key={option} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					) : (
						<TextField
							label={field.label}
							name={field.name}
							type={field.type}
							value={formData[field.name] || ''}
							onChange={handleChange}
							fullWidth
						/>
					)}
				</Box>
			))}
			<Button type="submit" variant="contained" color="primary">
				Create
			</Button>
		</Box>
	);
};

export default Form;
