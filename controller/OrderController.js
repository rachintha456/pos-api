
const OrderSchema = require("../model/OrderSchema");


const create=(req,resp)=>{
    const order = new OrderSchema({
        date:req.body.date,
        customerDetails:req.body.customerDetails,
        totalCost:req.body.totalCost,
        products:req.body.products
    });
    order.save().then(response=>{
        resp.status(201).json({'message':'order saved!'});
    }).catch(error=>{
        return resp.status(500).json(error);
    });
}
const findById=(req,resp)=>{
    OrderSchema.findOne({'_id':req.params.id}).then(selectedObj=>{
        if(selectedObj!=null){
            return  resp.status(200).json({'data':selectedObj});
        }
        return resp.status(404).json({'message':'Order not found!'});
    });
}
const update=(req,resp)=>{}
const deleteById=(req,resp)=>{}
const findAll=(req,resp)=>{}

module.exports={
    create,findById,update,deleteById,findAll
}