import { Container, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Link from "next/link"
import Button from "@mui/material/Button";

function createData(name,github,link){
  return {name,github,link};
}
const rows = [
  createData('duduge','https://github.com/gimujeongsig/Javascript-Lecture/tree/main/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8','/duduge'),
  createData('memory','https://github.com/gimujeongsig/Javascript-Lecture/tree/main/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8','/memory'),
  createData('snake','https://github.com/gimujeongsig/Javascript-Lecture/tree/main/%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC%EA%B2%8C%EC%9E%84','/snake'),
]

export default function Home() {
  return (
    <>
      <Container fixed>
        <h1>Demo List</h1>
        <Table sx={{minWidth : 650}} aria-Label="demo-list">
          <TableHead>
            <TableRow>
              <TableCell>Demo-List</TableCell>
              <TableCell>github</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th': {border:0}}}
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell><Link href={row.github}>깃허브 바로가기</Link></TableCell>
                <TableCell><Button variant="outlined" size="small" href={row.link}>Link</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  )
}
