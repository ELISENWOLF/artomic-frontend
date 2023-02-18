import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Rating from '../Components/HomeComponents/Rating';
import products from '../data/Products';

const SingleProduct = ({match}) => {
    const product = products.find((p) => p._id === match.params.id);
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
                        <div className='flex-box d-flex justify-content-between align-items-center'>
                            <h6>Reviews</h6>
                            <Rating
                             value={product.rating}
                             text={`${product.numReviews} reviews`}
                            />
                        </div>
                        {product.countInStock > 0 ? (
                            <>
                                <div className='flex-box d-flex justify-content-between align-items-center'>
                                    <h6>Quantity</h6>
                                    <select>
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button className='round-black-btn'>Add To Cart</button>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>

        {/* Rating */}
        <div className='row my-5'>
            <div className='col-md-6'>
                <h6 className='mb-3'>REVIEWS</h6>
                <Message variant={"alert-info mt-3"}>No Reviews</Message>
                <div className='mb-5 mb-md-3 b-light p-3 shadow-sm rounded'>
                    <strong>Admin Doe</strong>
                    <Rating />
                    <span>Jan 12 2022</span>
                    <div className='alert alert-info mt-3'>
                        hjsfh jjhaf ahhfh af iahflhfhog hiurgh bvj fbv iwhgnvbjk biv isljkfjb
                         iuh ieibe iehbjkdbihudguigoiheuwpiyroeghiuebuieivbieb  eiughiebviuebi iegbviebvie 
                         bigeui iguwbe ievbiwheuhigh oe iebie ieuh ibviehuhguhhigi ooehuhgooeiohwpg  
                         ehuhighdhfow ohwheuho owhgueho ohf owh oiwhoi ho.
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <h6>Write a customer Review</h6>
                <div className='my-4'></div>

                <form>
                    <div className='my-4'>
                        <strong>Rating</strong>
                        <select className='col-12 bg-light p-3 mt-2 border-0 rounded'>
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                        </select>
                    </div>
                    <div className='my-4'>
                        <strong>Comment</strong>
                        <textarea
                            row='3'
                            className='col-12 bg-light p-3 mt-2 border-0 rounded'
                        ></textarea>
                    </div>
                    <div className='my-3'>
                        <button className='col-12 bg-black border-0 p-3 rounded text-white'>
                            Submit
                        </button>
                    </div>
                </form>
                <div className='my-3'>
                    <Message variant={"alert-warning"}>
                        Please{" "}
                        <Link to='/login'>
                            "<strong>Login</strong>"
                        </Link>{" "}
                        to write a review{" "}
                    </Message>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
