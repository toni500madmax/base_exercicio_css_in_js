import { H3, LI, Link } from './Vaga'

export type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => {
  return (
    <LI>
      <H3>{props.titulo}</H3>
      <ul>
        <li>Localizacao: {props.localizacao}</li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratacao: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
      </ul>
      <Link href="#">Ver detalhes e candidatar-se</Link>
    </LI>
  )
}

export default Vaga
