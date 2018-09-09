import React from 'react'
import PositionListContainer from '../containers/PositionListContainer'
import PositionCard from './PositionCard'

const PositionList = () => (
  <PositionListContainer>
    {({ positions }) => {
      if (positions.length === 0) {
        return <h5 className="is-title is-5">Sem posições cadastradas</h5>
      }

      return positions.map((position, index) => <PositionCard key={`position-card-${index}`} position={position} />)
    }}
  </PositionListContainer>
)

export default PositionList
