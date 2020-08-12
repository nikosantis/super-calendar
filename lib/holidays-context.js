import { createContext, useReducer, useContext } from 'react'

const HolidaysStateContext = createContext()
const HolidaysDispatchContext = createContext()

const INITIAL_STATE = [
  {
    date: '2020-01-01',
    title: 'Año nuevo',
    description: 'Irrenunciable',
    type: 'Civil',
    legal: 'Ley 2.977',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-04-10',
    title: 'Viernes Santo',
    description: '',
    type: 'Religioso',
    legal: 'Ley 2.977',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-04-11',
    title: 'Sábado Santo',
    description: '',
    type: 'Religioso',
    legal: 'Ley 2.977',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-05-01',
    title: 'Día Nacional del Trabajo',
    description: 'Irrenunciable',
    type: 'Civil',
    legal: 'Código del Trabajo, Ley 19.973',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-05-21',
    title: 'Día de las Glorias Navales',
    description: '',
    type: 'Civil',
    legal: 'Ley 2.977',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-06-29',
    title: 'San Pedro y San Pablo',
    description: '',
    type: 'Religioso',
    legal: 'Ley 2.977, Ley 18.432, Ley 19.668',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-07-16',
    title: 'Día de la Virgen del Carmen',
    description: '',
    type: 'Religioso',
    legal: 'Ley 20.148',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-08-15',
    title: 'Asunción de la Virgen',
    description: '',
    type: 'Religioso',
    legal: 'Ley 2.977',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-09-18',
    title: 'Independencia Nacional',
    description: 'Irrenunciable',
    type: 'Civil',
    legal: 'Ley 2.977, Ley 19.973',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-09-19',
    title: 'Día de las Glorias del Ejército',
    description: 'Irrenunciable',
    type: 'Civil',
    legal: 'Ley 2.977, Ley 20.629',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-10-12',
    title: 'Encuentro de Dos Mundos',
    description: '',
    type: 'Civil',
    legal: 'Ley 3.810, Ley 19.668',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-10-25',
    title: 'Plebiscito Constitucional',
    description: 'Irrenunciable',
    type: 'Civil',
    legal: 'Ley 21.200, Ley 18.700, Ley 21.221',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-10-31',
    title: 'Día de las Iglesias Evangélicas y Protestantes',
    description: '',
    type: 'Religioso',
    legal: 'Ley 20.299',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-11-01',
    title: 'Día de Todos los Santos',
    description: '',
    type: 'Religioso',
    legal: 'Ley 2.977',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-11-29',
    title: 'Elección Primaria de Alcaldes y Gobernadores Regionales',
    description: 'Irrenunciable - Por Confirmar',
    type: 'Civil',
    legal: 'Ley 20.640, Ley 18.700, Ley 21.221',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-12-08',
    title: 'Inmaculada Concepción',
    description: '',
    type: 'Religioso',
    legal: 'Ley 2.977',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-12-25',
    title: 'Navidad',
    description: 'Irrenunciable',
    type: 'Religioso',
    legal: 'Ley 2.977, Ley 19.973',
    holiday: 'Feriados Chile'
  },
  {
    date: '2020-06-07',
    title: 'Asalto y Toma del Morro de Arica',
    description: '',
    type: 'Civil',
    legal: 'Ley 20.663',
    benefited: 'Región de Arica y Parinacota',
    holiday: 'Feriados Específicos'
  },
  {
    date: '2020-08-20',
    title: 'Nacimiento del Prócer de la Independencia',
    description: '',
    type: 'Civil',
    legal: 'Ley 16.535, Ley 20.768',
    benefited: 'Comunas de Chillán y Chillán Viejo',
    holiday: 'Feriados Específicos'
  },
  {
    date: '2020-12-31',
    title: 'Feriado Bancario',
    description: '',
    type: 'Civil',
    legal: 'Ley General de Bancos',
    benefited: 'Trabajadores de Instituciones Bancarias',
    holiday: 'Feriados Específicos'
  }
]

function holidaysReducer (state, action) {
  switch (action.type) {
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function HolidaysProvider (props) {
  const [state, dispatch] = useReducer(holidaysReducer, INITIAL_STATE)

  return (
    <HolidaysStateContext.Provider value={state}>
      <HolidaysDispatchContext.Provider {...props} />
    </HolidaysStateContext.Provider>
  )
}

function useHolidaysState () {
  const context = useContext(HolidaysStateContext)
  if (typeof context === 'undefined') {
    throw new Error('useHolidaysState must be used within a HolidaysProvider')
  }
  return context
}

function useHolidaysDispatch () {
  const context = useContext(HolidaysDispatchContext)
  if (typeof context === 'undefined') {
    throw new Error('useHolidaysDispatch must be used within a HolidaysProvider')
  }
  return context
}

export {
  HolidaysProvider,
  useHolidaysState,
  useHolidaysDispatch
}
