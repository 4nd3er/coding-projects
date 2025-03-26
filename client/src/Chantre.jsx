import React from 'react'
import CustomeCard from '../../components/ui/Custome-card'
const ImageArray=[{id:1,url:'@assets/chantre.jpeg',des:'chantrees una putica'}
    ,{id:2,url:'@assets/chantre.jpeg',des:'chantrees una putica'},{id:3,url:'@assets/chantre.jpeg',des:'chantrees una putica'}]
function Chantre() {
  return (


    ImageArray.map(x)=>
    {
      

<CustomeCard data={x} key={x.id} />
       
      
    }
   

  )
}

export default Chantre