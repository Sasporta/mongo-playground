import mongoose from 'mongoose';

export interface EmployeeDocument extends mongoose.Document {
	name: string;
	age: number;
	companyId: string;
	managerId: string;
	createdAt: Date;
	updatedAt: Date;
}

const EmployeeSchema = new mongoose.Schema(
	{
		name: {
			required: true,
			type: String,
		},
		age: {
			required: true,
			type: String,
		},
		companyId: {
			required: true,
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Company',
			select: false,
		},
		managerId: {
			required: false,
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Employee',
			select: false,
		},
		createdAt: {
			type: Date,
			select: false,
		},
		updatedAt: {
			type: Date,
			select: false,
		},
	},
	{ timestamps: true, versionKey: false },
);

export default mongoose.model<EmployeeDocument>('Employee', EmployeeSchema);
