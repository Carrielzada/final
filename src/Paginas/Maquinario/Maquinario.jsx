import { Button, Col, Form, Row, Container, Table, Alert, FormLabel } from 'react-bootstrap';
import { FaCheckCircle, FaTrash, FaListAlt, FaEdit, FaSearch } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import './Maquinario.css';
import MaquinarioService from '../../services/MaquinarioService';

const maquinarioService = new MaquinarioService();

function Maquinario() {
    const [sucessoMensagem, setSucessoMensagem] = useState('');
    const [validated, setValidated] = useState(false);
    const [id, setId] = useState("");
    const [modelo, setModelo] = useState("");
    const [placa, setPlaca] = useState("");
    const [ano, setAno] = useState("");
    const { idMaquinario } = useParams();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const [listaMaquinario, setListaMaquinario] = useState([]);
    const [termoBusca, setTermoBusca] = useState("");

    const handleBuscaChange = (event) => {
        setTermoBusca(event.target.value);
    };

    const handleFiltrar = async () => {
        await listarMaquinarios(termoBusca);
    };

    const listarMaquinarios = async (termoBusca) => {
        let dados = [];
        if (termoBusca) {
            dados = await maquinarioService.filtrar(termoBusca);
            setListaMaquinario(dados);
        } else {
            dados = await maquinarioService.obterTodos();
            setListaMaquinario(dados);
        }
    };

    const carregarMaquinarios = async () => {
        const dados = await maquinarioService.obterTodos();
        setListaMaquinario(dados);
    };

    useEffect(() => {
        const obterMaquinario = async () => {
            const dados = await maquinarioService.obterPorId(idMaquinario);
            setId(dados.id);
            setModelo(dados.modelo);
            setPlaca(dados.placa);
            setAno(dados.ano);
        };

        if (idMaquinario !== undefined) {
            obterMaquinario();
        } else {
            setId("");
            setModelo("");
            setPlaca("");
            setAno("");
        }

        listarMaquinarios();
    }, [idMaquinario]);

    const handleExcluir = async (id) => {
        if (window.confirm('Tem Certeza que Deseja Excluir o Maquinário?')) {
            await maquinarioService.delete(id);
            await listarMaquinarios();
        }
    };

    const handleModelo = (e) => {
        const value = e.target.value;
        setModelo(value);
        if (value && value.length <= 50) {
            setErrors((prev) => ({ ...prev, modelo: null }));
        } else {
            if (value === "") {
                setErrors((prev) => ({ ...prev, modelo: 'O campo não pode estar vazio.' }));
            } else {
                setErrors((prev) => ({ ...prev, modelo: 'O campo não aceita mais de 50 caracteres.' }));
            }
        }
    };

    const handlePlaca = (e) => {
        const value = e.target.value;
        setPlaca(value);
        if (value && value.length <= 50) {
            setErrors((prev) => ({ ...prev, placa: null }));
        } else {
            if (value === "") {
                setErrors((prev) => ({ ...prev, placa: 'O campo não pode estar vazio.' }));
            } else {
                setErrors((prev) => ({ ...prev, placa: 'O campo não aceita mais de 50 caracteres.' }));
            }
        }
    };

    const handleAno = (e) => {
        const value = e.target.value;
        setAno(value);
        if (value && value.length <= 4) {
            setErrors((prev) => ({ ...prev, ano: null }));
        } else {
            if (value === "") {
                setErrors((prev) => ({ ...prev, ano: 'O campo não pode estar vazio.' }));
            } else {
                setErrors((prev) => ({ ...prev, ano: 'O campo não aceita mais de 4 caracteres.' }));
            }
        }
    };

    async function handleSalvar(event) {
        event.preventDefault();
        const form = event.currentTarget;
        let newErros = {};

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        if (!modelo) {
            newErros.modelo = 'O campo não pode estar vazio.';
        } else if (modelo.length > 50) {
            newErros.modelo = 'O campo não aceita mais de 50 caracteres.';
        }

        if (!placa) {
            newErros.placa = 'O campo não pode estar vazio.';
        } else if (placa.length > 50) {
            newErros.placa = 'O campo não aceita mais de 50 caracteres.';
        }

        if (!ano) {
            newErros.ano = 'O campo não pode estar vazio.';
        } else if (ano.length > 50) {
            newErros.ano = 'O campo não aceita mais de 50 caracteres.';
        }

        if (Object.keys(newErros).length > 0) {
            setErrors(newErros);
            setValidated(true);
        } else {
            const maquinario = {
                id: 0,
                modelo: form.modelo.value,
                placa: form.placa.value,
                ano: form.ano.value,
            };

            if (idMaquinario === undefined) {
                await maquinarioService.adicionar(maquinario);
                setSucessoMensagem('Maquinario Cadastrado com Sucesso!');
                carregarMaquinarios();
            } else {
                await maquinarioService.atualizar(idMaquinario, maquinario);
                setSucessoMensagem('Maquinário Atualizado com Sucesso!');
                setValidated(false);
            }

            form.reset();
            setModelo('');
            setPlaca('');
            setAno('');
            setValidated(false);

            setTimeout(() => {
                setSucessoMensagem('');
                setErrors({});
                navigate('/maquinario');
            }, 3000);
        }
    }

    return (
        <>
            <Container className='form-colab'>
                <h2 className="text-center mb-4"><FaListAlt /> CADASTRO DE MAQUINÁRIO</h2>
                <Col className="card borda">
                    <hr />
                    <Col className="card-body">
                        <Form noValidate validated={validated} onSubmit={handleSalvar}>
                            <Row>
                                <Col lg='1' className='mt-3'>
                                    <Form.Label>ID</Form.Label>
                                    <Col className="input-group mb-3">
                                        <Form.Control type="text" className="form-control" placeholder="ID" aria-label="ID" aria-describedby="basic-addon2" disabled />
                                    </Col>
                                    </Col>

<Col lg='3' className='mt-3'>
    <Form.Group controlId='modelo'>
        <Form.Label>Modelo</Form.Label>
        <Col className="input-group mb-3">
            <Form.Control
                type="text"
                className="form-control"
                placeholder="Modelo do Maquinario"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                required
                value={modelo}
                isInvalid={!!errors.modelo}
                onChange={handleModelo}
                name="modelo"
            />
            <Form.Control.Feedback type="invalid">
                {errors.modelo}
            </Form.Control.Feedback>
        </Col>
    </Form.Group>
</Col>

<Col lg='3' className='mt-3'>
    <Form.Group controlId='placa'>
        <Form.Label>Placa</Form.Label>
        <Col className="input-group mb-3">
            <Form.Control
                type="text"
                className="form-control"
                placeholder="Placa do Maquinário"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                required
                value={placa}
                isInvalid={!!errors.placa}
                onChange={handlePlaca}
                name='placa'
            />
            <Form.Control.Feedback type="invalid">
                {errors.placa}
            </Form.Control.Feedback>
        </Col>
    </Form.Group>
</Col>

<Col lg='3' className='mt-3'>
    <Form.Group controlId='ano'>
        <FormLabel>Ano do Maquinário</FormLabel>
        <Col className="input-group mb-3">
            <Form.Control
                type="text"
                className="form-control"
                placeholder="Ano do Maquinário"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                required
                value={ano}
                isInvalid={!!errors.ano}
                onChange={handleAno}
                name='ano'
            />
            <Form.Control.Feedback type="invalid">
                {errors.ano}
            </Form.Control.Feedback>
        </Col>
    </Form.Group>
</Col>
<Alert className="alert-success-custom" variant='success' show={sucessoMensagem !== ""}> <b> <FaCheckCircle></FaCheckCircle> </b>{sucessoMensagem}</Alert>
            </Row>
            <Row>
                <Col className='row justify-content-center'>
                    <Col className='col-auto'>
                    <Button type="submit" variant='success m-1' className="btn btn-success btn-lg me-2" disabled={!!id}>Cadastrar</Button>
                                    <Button type="submit" variant='warning m-1' className="btn btn-warning btn-lg me-2" disabled={!id}>Atualizar</Button>
                    </Col>
                </Col>
            </Row>
        </Form>
    </Col>
</Col>
</Container>

<Container className="custom-table-container mx-0">
<Col>
                        <div className="mt-5 d-flex">
                            <FormLabel className="pesquise-label">Pesquise</FormLabel>
                            <Form.Control type="text" onChange={handleBuscaChange} placeholder="Pesquise Maquinário" />
                            <Button onClick={handleFiltrar} variant="secondary" className="mr-2"><FaSearch /></Button>
                        </div>
                    </Col>
    <Table striped bordered hover className="table mt-5 custom-table">
        <thead>
            <tr>
                <th scope="col" className="w-5">ID</th>
                <th scope="col" className="w-15">Modelo</th>
                <th scope="col" className="w-15">Placa</th>
                <th scope="col" className="w-20">Ano</th>
            </tr>
        </thead>
        <tbody>
            {listaMaquinario.length <= 0 ? (
                <tr>
                    <td colSpan="13">Nenhum maquinario cadastrado</td>
                </tr>
            ) : (
                listaMaquinario.map((maquinario, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'dark-green' : 'light-green'}>
                        <td>{maquinario.id}</td>
                        <td>{maquinario.modelo}</td>
                        <td>{maquinario.placa}</td>
                        <td>{maquinario.ano}</td>
                        <td>
                        <div className="d-flex align-items-center">
                                                    <Link to={`/maquinario/${maquinario.id}`} className='text-primary fs-5'>
                                                        <FaEdit />
                                                    </Link>
                                                    <Button variant="link" onClick={() => handleExcluir(maquinario.id)} className='text-danger fs-5'>
                                                         <FaTrash></FaTrash></Button>
                        </div>
                        </td>
                    </tr>
                ))
            )}
        </tbody>
    </Table>
</Container>
</>
);
}

export default Maquinario;