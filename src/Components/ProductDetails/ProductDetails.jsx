import React, {  use, useRef } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const ProductDetails = () => {
    const { _id: ProductId } = useLoaderData()
    const bidModalRef = useRef(null)
    const {user} = use(AuthContext)


    const handleBidModalOpen = ()=>{
        bidModalRef.current.showModal();
    }

    const handleBidSubmit =(e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const bid = e.target.bid.value
        console.log( ProductId , name , email , bid)
        const newBid = {
            product: ProductId, 
            buyer_name: name,
            buyer_email: email,
            bid_price: bid,
            status: 'pending'
        }

        fetch('http://localhost:3000/bids',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newBid)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('after placing bid', data)
        })

    }


    return (
        <div>
            <div>
                <div>

                </div>
                <div>
                    <button onClick={ handleBidModalOpen} className="btn btn-primary">I want to buy this product</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog ref={bidModalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Give the best offer!</h3>
    <p className="py-4">Offer something seller can not resist</p>
    <form onSubmit={handleBidSubmit}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" readOnly defaultValue={user.displayName}/>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" readOnly defaultValue={user.email}/>
          {/* bid amount */}
          <label className="label">Bid</label>
          <input type="text" name='bid' className="input" placeholder="Your Bid"/>
          <button className="btn btn-neutral mt-4">Please Your Bid</button>
        </fieldset>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;