import mongoose, { Schema} from 'mongoose';

// Document interface
export interface Company {
    companyName: String;
}


const companySchema = new Schema<Company>({
    companyName:{
        type: String,
        required: true,
        unique:true,
    },
})


const CompanyModel = mongoose.model('Company', companySchema);

export default CompanyModel;