"use client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

const AdduserForm = ({createUserAction}) => {
    return (
       <Modal>
      <Button variant="secondary">Open Contact Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
               <form action={createUserAction} className="flex flex-col gap-4">

  <TextField className="w-full">
    <Label>Name</Label>
    <Input
      name="name"
      type="text"
      placeholder="Enter your name"
    />
  </TextField>

  <TextField className="w-full">
    <Label>Email</Label>
    <Input
      name="email"
      type="email"
      placeholder="Enter your email"
    />
  </TextField>

  <Modal.Footer>
    <Button slot="close" variant="secondary">
      Cancel
    </Button>

    <Button type="submit">
      Submit
    </Button>
  </Modal.Footer>

</form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default AdduserForm;