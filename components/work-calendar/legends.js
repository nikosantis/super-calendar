export default function Legends () {
  return (
    <div className='legends'>
      <div>Leyenda:</div>
      <div>HEA: Horas Extra Asignadas</div>
      <div>HEC: Horas Extras Cumplidas</div>
      <div>HNT: Horas No Trabajadas</div>
      <div>HT: Horas Trabajadas</div>
      <style jsx>
        {`
          .legends {
            display: flex;
            justify-content: space-evenly;
            padding: 15px 0;
            font-size: 12px;
          }
        `}
      </style>
    </div>
  )
}
