import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ContentTable = ({ contents, onDelete }) => (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Título</TableCell>
                    <TableCell align="left">Autor</TableCell>
                    <TableCell align="left">Descrição</TableCell>
                    <TableCell align="left">Editar</TableCell>
                    <TableCell align="left">Excluir</TableCell>
                    <TableCell align="left">Visualizar</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contents.map((content) => (
                    <TableRow key={content.titulo} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{content.titulo}</TableCell>
                        <TableCell align="left">{content.autor}</TableCell>
                        <TableCell align="left">{content.descricao}</TableCell>
                        <TableCell align="center">
                            <Link to={`/ADM/Editar/${content._id}`}>
                                <IconButton aria-label="editar"><Edit /></IconButton>
                            </Link>
                        </TableCell>
                        <TableCell align="center">
                            <IconButton aria-label="deletar" onClick={() => onDelete(content._id)}><Delete /></IconButton>
                        </TableCell>
                        <TableCell align="center">
                            <Link to={`/ADM/Conteudo/${content._id}`}>
                                <IconButton aria-label="visualizar"><Visibility /></IconButton>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default ContentTable;
