import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Col,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

import { firebase } from '../../components/firebase';
import SignUpSuccess from './SignUpSuccess';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

var db = firebase.firestore();

const schema = yup.object().shape({
  name: yup.string().min(3).required('Name is required'),
  email: yup.string().email('Must be a valid email').required('Email is required')
});

// core components

function SignUp() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })
  const [ nameFocus, setNameFocus ] = useState(false);
  const [ emailFocus, setEmailFocus ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);

  const onSubmit = (data) => {
    try {
      db.collection('contacts').add({
        name: data.name,
        email: data.email,
        time: new Date(),
        active: true
      })
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitted(true)
    }
  }

  return (
    <>
      <div
        id="connect-section"
        className="section section-contact-us text-center"
      >
        <Container>
          { submitted ? <SignUpSuccess /> :
            <Form onSubmit={handleSubmit(onSubmit)} className="form">
              <Row>
                <Col>
                  <h2 className="text-center">Sign Up For Updates</h2>
                  <hr />
                  <p>Be the first to know when new levels and new M.E.K.A.s are released. We will not share your info with third parties.</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                  <span className="align-left text-danger" color="danger">
                    {errors.name?.message}
                  </span>
                  <InputGroup
                    className={
                      "no-border" + (nameFocus ? " input-group-focus" : "")
                    }
                  >

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      innerRef={register}
                      name="name"
                      placeholder="Name..."
                      type="text"
                      invalid={errors.name?.message.length > 0}
                      onFocus={() => setNameFocus(true)}
                      onBlur={() => setNameFocus(false)}
                    />
                  </InputGroup>
                  <span className="align-left text-danger" color="danger">
                    {errors.email?.message}
                  </span>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      innerRef={register}
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      autoCorrect="off"
                      autoCapitalize="none"
                      invalid={errors.email?.message.length > 0}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  <Button
                    className="btn-round"
                    color="primary"
                    type="submit"
                    size="lg"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          } 
        </Container>
      </div>
    </>
  );
}

export default SignUp;
