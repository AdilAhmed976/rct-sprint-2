import React from "react";
// import { chakra,Button,Modal,ModalBody,Input,Select,RadioGroup,Radio } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Select,
  Radio,
  RadioGroup
} from '@chakra-ui/react'



const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>

     <Button my={4} data-cy="add-product-button">Add</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Male</option>
            <option data-cy="add-product-category-pant">Female</option>
            <option data-cy="add-product-category-jeans">Unisex</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">male</Radio>
            <Radio data-cy="add-product-gender-female">female</Radio>
            <Radio data-cy="add-product-gender-unisex">unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Add Product</Button>
        </ModalBody>
      </Modal> 
    </>
  );
};

export default AddProduct;


