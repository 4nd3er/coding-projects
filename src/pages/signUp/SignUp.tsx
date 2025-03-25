import React, { useState } from 'react'
import {Form, Input, Button} from "@heroui/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

function SignUp() {
  const [action, setAction] = useState<string>();
  return (
    <div className="w-full flex justify-center items-center"> 
    
    <Card className="w-1/4 m-10">
      <CardHeader className="flex gap-3 bg-black">
      
        <div className="flex flex-col">
          <p className="text-md weight-900 text-white">Sign Up</p>

        </div>
      </CardHeader>
      <Divider />
      <CardBody>
      <Form
    className="w-full flex-col gap-6 mt-10"
    onReset={() => setAction("reset")}
    onSubmit={(e) => {
      e.preventDefault();
      let data = Object.fromEntries(new FormData(e.currentTarget));

      setAction(`submit ${JSON.stringify(data)}`);
    }}
  >
    <Input
      isRequired
      errorMessage="Please enter a valid Name"
      label="Name"
      labelPlacement="outside"
      name="Name"
      placeholder="Enter your complete name"
      type="text"
      className="mt-5"
    />

    <Input
      isRequired
      errorMessage="Please enter a valid email"
      label="Email"
      labelPlacement="outside"
      name="email"
      placeholder="Enter your email"
      type="email"
      className=" mt-5"
      
    />
    <Input
      isRequired
      errorMessage="Please enter a valid password"
      label="Password"
      labelPlacement="outside"
      name="password"
      placeholder="Enter a password "
      type="password"
      className="mt-5"
    />
    <Divider/>
    <div className="flex gap-3 mt-5">
      <Button color="primary" type="submit">
        Submit
      </Button>
      <Button type="reset" variant="flat">
        Reset
      </Button>
    </div>
    
  </Form>
      </CardBody>
    </Card>
   </div>
  )
}

export default SignUp