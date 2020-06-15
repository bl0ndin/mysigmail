import { guid } from '../util/helpers'

const fields = {
  basic: []
}

function seed () {
  const basic = [
    { name: 'Full name', type: 'text', value: '' },
    { name: 'Job title', type: 'text', value: '' },
    { name: 'Company', type: 'text', value: '' },
    { name: 'Company line 2', type: 'text', value: '' },
    { name: 'Address', type: 'text', value: '' },
    { name: 'Address line 2', type: 'text', value: '' },
    { name: 'ZIP code', type: 'text', value: '' },
    { name: 'City', type: 'text', value: '' },
    { name: 'Country', type: 'text', value: '' },
    { name: 'Mob', type: 'mobile', value: '' },
    { name: 'Tel', type: 'phone', value: '' },
    { name: 'Email', type: 'email', value: '' }
  ]

  basic.forEach(item => {
    fields.basic.push({ ...item, id: guid() })
  })

  addPlaceholder()
}

function addPlaceholder () {
  const placeholders = [
    'Pascal DUPONT',
    'Chargé d\'affaires process',
    'Siège social',
    'Agence Sud-Est',
    '8 rue Théodore Monod,',
    'Zone ECOPARC Nord',
    '57140',
    'Norroy Le Veneur',
    'FRANCE',
    '+33 6 15 08 30 49',
    '+33 4 76 84 29 70',
    'email@steapstailor.com'
  ]

  fields.basicPlaceholder = [
    ...fields.basic.map((item, index) => {
      return { ...item, value: placeholders[index] }
    })
  ]
}

seed()

export default fields
