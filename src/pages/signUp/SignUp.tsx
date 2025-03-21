import React, { useState } from 'react'
import {Form, Input, Button} from "@heroui/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

function SignUp() {
  const [action, setAction] = useState<string>();
  return (
    <div className="h-screen w-screen flex justify-center "> 
    
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Sign Up</p>

        </div>
      </CardHeader>
      <Divider />
      <CardBody>
      <Form
    className="w-full max-w-xs flex flex-col gap-4 mt-10"
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
    />

    <Input
      isRequired
      errorMessage="Please enter a valid email"
      label="Email"
      labelPlacement="outside"
      name="email"
      placeholder="Enter your email"
      type="email"
      className="color-black"
    />
    <Input
      isRequired
      errorMessage="Please enter a valid password"
      label="Password"
      labelPlacement="outside"
      name="password"
      placeholder="Enter a password "
      type="password"
    />
    <div className="flex gap-2">
      <Button color="primary" type="submit">
        Submit
      </Button>
      <Button type="reset" variant="flat">
        Reset
      </Button>
    </div>
    {action && (
      <div className="text-small text-default-500">
        Action: <code>{action}</code>
      </div>
    )}
  </Form>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
   </div>
  )
}

export default SignUp