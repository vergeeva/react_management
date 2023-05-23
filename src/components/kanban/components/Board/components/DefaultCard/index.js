export default function ({ children: card, dragging, allowRemoveCard, onCardRemove }) {
    return (
        <div className={`react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`}>
      <span>
        <div className='react-kanban-card__title'>
          <span>{card.title}</span>
            {allowRemoveCard && (
                <span style={{ cursor: 'pointer', color:'#a73af3', marginBottom:6 }} onClick={() => onCardRemove(card)}>
              ✕
            </span>
            )}
        </div>
      </span>
            <div className='react-kanban-card__description'>{card.description}</div>
        </div>
    )
}
