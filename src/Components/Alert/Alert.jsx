import React from 'react';
import './Alert.css';

export const Alert = () => {
  return (
    <div className='alerte'>
        <h2>Alertes !</h2>
        <p className='alerte-ge'>
            <h5>Aujourd'hui 17:47:22</h5>
            <h3> GE N°1,2000KVA</h3>
            <h4>GE Allumé</h4>
        </p>

        <p className='alerte-ge'>
            <h5>Aujourd'hui 17:47:22</h5>
            <h3> GE N°1,2000KVA</h3>
            <h4>Niveau de carburant plein</h4>
        </p>

        <p className='alerte-ge'>
            <h5>Aujourd'hui 17:47:22</h5>
            <h3> GE N°1,2000KVA</h3>
            <h4>Niveau de carburant bas</h4>
        </p>
    </div>
  )
}
export default Alert;