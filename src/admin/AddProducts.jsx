import React , { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { toast } from 'react-toastify'

import { db,storage } from '../firebase.config'
import { ref, uploadBytesResumable,getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const AddProducts = () => {

  const [ enterTitle, setEnterTitle ] = useState('')
  const [ enterShortDesc, setEnterShortDesc ] = useState('')
  const [ enterDesc, setEnterDesc ] = useState('')
  const [ enterCategory, setEnterCategory ] = useState('Category not selected')
  const [ enterPrice, setEnterPrice ] = useState('')
  const [ enterProductImg, setEnterProductImg ] = useState(null)
  const [ loading, setLoading ] =  useState(false)

  const navigate = useNavigate()

  const addProduct = async(e) => {
    e.preventDefault()
    setLoading(true)

    //add products to firebase database//

    try{

      const docRef = collection(db, 'products')

      const productPath = 'productImages/'  + enterProductImg.name

      const storageRef = ref(storage, productPath)

      const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

      uploadTask.on('state_changed',(snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is '+ progress +' % done');
      },
      
      () => {
        toast.error('images not uploaded')
      }, 
      
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await addDoc(docRef, {
            title: enterTitle,
            shortDesc: enterShortDesc,
            description: enterDesc,
            category: enterCategory,
            price: enterPrice,
            imgUrl: downloadURL
          })
        })
      })

      setLoading(false)
      toast.success('product added successfully')
      navigate('/dashboard/all-products')
    }catch (err) {

      setLoading(false)
      toast.error('product not added')
    }

  }


  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {
              loading ? <h4 className='py-5'>Loading....</h4> : <>

              <h4 className='mb-5'>Add Products</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className="form_group">
                <span>Product title</span>
                <input 
                  type="text" 
                  placeholder='Potrait' 
                  value={enterTitle}
                  onChange={e => setEnterTitle(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <span>Short Description</span>
                <input 
                  type="text" 
                  placeholder='lorem...' 
                  value={enterShortDesc}
                  onChange={e => setEnterShortDesc(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <span>Description</span>
                <input 
                  type="text" 
                  placeholder='Description' 
                  value={enterDesc}
                  onChange={e => setEnterDesc(e.target.value)}
                  required
                />
              </FormGroup>

              <div className='d-flex align-items-center justify-content-between gap-5'>
                <FormGroup className="form_group w-50">
                  <span>Price</span>
                  <input 
                    type="number" 
                    placeholder='$100' 
                    value={enterPrice}
                    onChange={e => setEnterPrice(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup className="form_group w-50">
                  <span>Category</span>
                  <select 
                    className='w-100 p-2'
                    value={enterCategory}
                    onChange={e => setEnterCategory(e.target.value)}
                    required
                  >
                    <option>Select Category</option>
                    <option value="Anime">Anime</option>
                    <option value="Nature">Nature</option>
                    <option value="3D">3D</option>
                    <option value="Painting">Painting</option>
                    <option value="Potrait">Potrait</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className="form_group">
                  <span>Product Image</span>
                  <input 
                    type="file" 
                    onChange={e => setEnterProductImg(e.target.files[0])}
                    required
                  />
                </FormGroup>
              </div>

              <button className="buy_btn"type="submit">Add Product</button>
            </Form>

              </>
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts