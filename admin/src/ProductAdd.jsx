import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductAdd() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    offerPrice: "",
    discountPercentage: "",
    description: "",
    category: "",
    image: "",
    reviews: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const response=await fetch("http://localhost:3000/product/add",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(formData)
    })
    if(response.status===201){
        console.log("Product created")
    }
  };
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-4">Product Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <input type="number" name="id" className="form-control" placeholder="Id" value={formData.id} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="text" name="title" className="form-control" placeholder="Title" value={formData.title} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <input type="text" name="category" className="form-control" placeholder="Category" value={formData.category} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <textarea name="description" className="form-control" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
          </div>

          <div className="mb-3">
            <input type="text" name="image" className="form-control" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <input type="number" name="price" className="form-control" placeholder="Price" value={formData.price} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <input type="number" name="discountPercentage" className="form-control" placeholder="Discount Percentage" value={formData.discountPercentage} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <input type="number" name="offerPrice" className="form-control" placeholder="Offer Price" value={formData.offerPrice} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <input type="number" name="reviews" className="form-control" placeholder="Reviews" value={formData.reviews} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}
