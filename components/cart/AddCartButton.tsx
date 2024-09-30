import React from 'react'
import { Button } from '../ui/button'
import { ShoppingBag } from 'lucide-react'

const AddCartButton = () => {
  return (

    <Button variant={'default'} className='mt-10'>
      <ShoppingBag />
      Add to cart</Button>
  )
}

export default AddCartButton