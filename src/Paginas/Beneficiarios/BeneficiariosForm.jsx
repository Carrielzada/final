import { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import InputMask from "react-input-mask";

const BeneficiariosForm = () => {
  const [validated, setValidated] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event, message) => {
    const form = event.currentTarget;
    event.preventDefault(); // Prevenir o comportamento padrão de envio do formulário

    // Verificar se o formulário é válido
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      setValidated(true);
      setTimeout(() => setErrorMessage(""), 3000); // Remover a mensagem de erro após 3 segundos
    } else {
      // Limpar mensagem de erro e exibir mensagem de sucesso
      setErrorMessage("");
      setSuccessMessage(message);
      setValidated(true);
      setTimeout(() => setSuccessMessage(""), 3000); // Remover a mensagem de sucesso após 3 segundos
    }
  };

  return (
    <div className="container-fluid mt-3">
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, "")}>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} xs={12} md={6} lg={3} controlId="validationCustom01">
            <Form.Label>ID</Form.Label>
            <InputMask mask="999999" maskChar=" ">
              {(inputProps) => (
                <Form.Control
                  {...inputProps}
                  type="text"
                  placeholder="ID"
                  required
                />
              )}
            </InputMask>
            <Form.Control.Feedback type="invalid">
              Por favor, insira um ID válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3} controlId="validationCustom02">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira um nome válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3} controlId="validationCustomUsername">
            <Form.Label>CPF</Form.Label>
            <InputMask mask="999.999.999-99" maskChar=" ">
              {(inputProps) => (
                <Form.Control {...inputProps} type="text" placeholder="CPF" required />
              )}
            </InputMask>
            <Form.Control.Feedback type="invalid">
              Por favor, insira um CPF válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3} controlId="validationCustom03">
            <Form.Label>Contato</Form.Label>
            <InputMask mask="(99) 99999-9999" maskChar=" ">
              {(inputProps) => (
                <Form.Control {...inputProps} type="text" placeholder="Contato" required />
              )}
            </InputMask>
            <Form.Control.Feedback type="invalid">
              Por favor, insira um contato válido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} xs={12} md={6} lg={3} controlId="validationCustom04">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" placeholder="Endereço" required />
            <Form.Control.Feedback type="invalid">
              Por favor, insira um endereço válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3} controlId="validationCustom05">
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" placeholder="Bairro" required />
            <Form.Control.Feedback type="invalid">
              Por favor, insira um bairro válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3} controlId="validationCustom06">
            <Form.Label>Número</Form.Label>
            <InputMask mask="99999" maskChar=" ">
              {(inputProps) => (
                <Form.Control {...inputProps} type="text" placeholder="Número" required />
              )}
            </InputMask>
            <Form.Control.Feedback type="invalid">
              Por favor, insira um número válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3} controlId="validationCustom07">
            <Form.Label>Data de Nascimento</Form.Label>
            <InputMask mask="99/99/9999" maskChar=" ">
              {(inputProps) => (
                <Form.Control {...inputProps} type="text" placeholder="Data de nascimento" required />
              )}
            </InputMask>
            <Form.Control.Feedback type="invalid">
              Por favor, insira uma data de nascimento válida.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Concordo com os termos e condições"
            feedback="Você deve concordar antes de enviar."
            feedbackType="invalid"
          />
        </Form.Group>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <Button
            type="submit"
            variant="success"
            className="me-md-2"
            onClick={(e) => handleSubmit(e, "Cadastro realizado com sucesso!")}
          >
            Cadastrar
          </Button>
          <Button
            type="submit"
            variant="warning"
            className="me-md-2"
            onClick={(e) => handleSubmit(e, "Atualizado com sucesso!")}
          >
            Atualizar
          </Button>
          <Button
            type="submit"
            variant="danger"
            onClick={(e) => handleSubmit(e, "Excluído com sucesso!")}
          >
            Deletar
          </Button>
        </div>
      </Form>
      {errorMessage && (
        <Alert variant="danger" className="mt-3">
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert variant="success" className="mt-3">
          {successMessage}
        </Alert>
      )}
    </div>
  );
};

export default BeneficiariosForm;