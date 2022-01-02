import styled from 'styled-components'

function Tables(username: string, post: string) {
    const currentTime = new Date()

    const date = currentTime.getFullYear() + '/' + currentTime.getMonth() + '/' + currentTime.getDate()
    const time = currentTime.getHours() + ':' + currentTime.getMinutes()

    return (
        <>
            <Table>
                <thead>
                <Tr>
                    <Th id="username">Username</Th>
                    <Th id="password">Post</Th>
                    <Th id="createdAt">Created At</Th>
                </Tr>
                </thead>
                <tbody>
                <Tr>
                    <Td>{username}</Td>
                    <Td>{post}</Td>
                    <Td>{date + ',' + time}</Td>
                </Tr>
                </tbody>
            </Table>
        </>
    )
}

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

const Td = styled.td`
  border: 1px solid white;
  text-align: left;
  padding: 0.5em;
`

const Th = styled.th`
  border: 1px solid #ddd;
  text-align: left;
  padding: 0.5em;
`

const Tr = styled.tr`
  border: 1px solid #ddd;
  text-align: left;
  padding: 0.5em;
  &:nth-child(odd) {
    background-color: #684848;
  }
`
export default Tables