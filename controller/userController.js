import User from "../model/user.js";
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

export const register = async (req,res) =>{
    const {name,email,password}=req.body;
    
    try{
        if(!name||!email||!password){
            return res.status(400).json({ message: "Incorrect or Invalid data" });
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        await user.save();
        res.status(201).json({
            message:"Registered Successfully",
            success:true
        })

    }
    catch(error){
        res.json("Error during Register:", error)
    }
    
}

export const login = async(req,res)=>{

    const {email,password}=req.body;

    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({ message: "User not found" });
        }
        const passwordCheck = await bcrypt.compare(password,user.password)

        if (!passwordCheck) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
       
        const token = JWT.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
        
        return res.status(200).json({token,message:"Successfully Logged In",success:true})
    }catch(error){
        res.status(500).json("Error during Login:",error)
    }

}