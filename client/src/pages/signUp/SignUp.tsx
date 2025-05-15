import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from "@heroui/react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

function SignUp() {
  const [action, setAction] = useState<string>();

  return (
    <Card className="m-10">
      <CardHeader className="flex gap-3 bg-black">
        <p className="text-md weight-900 text-white">Sign Up</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <Form
          className=""
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
            placeholder="Enter your name"
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
            className="mt-5"

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
          <Divider />
          <CardFooter>
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="flat">
              Reset
            </Button>
          </CardFooter>
        </Form>
      </CardBody>
    </Card>
  )
}

export default SignUp