import React from 'react'
import Header from '../Components/Header';
import products from '../data/Products'

const SingleProduct = ({match}) => {
    const product = product.find((p) => p._id === match.params.id);
  return (
    <>
      <Header />
      <div className='container single-product'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='single-image'>
                    <img src={product.image} alt={product.name} />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='product-dt1'>
                    <div className='product-info'>
                        <div className='product-name'>{product.name}</div>
                    </div>
                    <p>{product.description}</p>

                    <div className='product-count col-lg-7'>
                        <div className='flx-box d-flex jusify-content-between align-items-center'>
                            <h6>Price</h6>
                            <span>${product.price}</span>
                        </div>
                        <div className='flex-box d-flex justify-content-between align-items-center'>
                            <h6>Status</h6>
                            {product.countInStock > 0 ? (
                                <span>In Stock</span>
                            ) : (
                                <span>unavaliable</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
