import mongoose from 'mongoose';
import Employee from './Employee';

export interface CompanyDocument extends mongoose.Document {
	name: string;
	country: string;
	createdAt: Date;
	updatedAt: Date;
}

const CompanySchema = new mongoose.Schema(
	{
		name: {
			required: true,
			unique: true,
			type: String,
		},
		country: {
			required: true,
			type: String,
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

CompanySchema.pre('deleteOne', async function () {
	// @ts-ignore
	await Employee.deleteMany({ companyId: this.getFilter().id });
});

export default mongoose.model<CompanyDocument>('Company', CompanySchema);
