import React from 'react'
import Report from '../Report/Report'
import ReportFuel from '../ReportFuel/ReportFuel'
export const View = () => {
  return (
    <div className='flex'>
      <div>
      <Report titre="Groupes électrogènes" soustitre1='14' soustitre2='4' soustitre3='10' desc='Total' desc2='Allumés' desc3='Eteints'/>
        <Report titre="Alertes" soustitre1='14' soustitre2='4' soustitre3='10' desc='Normales' desc2='Avertissements' desc3='Urgents'/>
      </div>
       
       <div>
       <ReportFuel titre='Carburant disponible en Litres' quantite='300'/>
       <ReportFuel titre='Carburant consommé en Litres' quantite='24.3' date="Aujourd'hui"/>
       </div>
    </div>
  )
}
