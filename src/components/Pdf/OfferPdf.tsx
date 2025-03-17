import React from 'react'
import { dataType } from '../../types/types'

const OfferPdf: React.FC<{ offer: dataType['offer'] }> = ({ offer }) => {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        padding: '40px',
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        lineHeight: '1.5',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: '800',
            color: '#1A1A1A',
            marginBottom: '10px',
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {offer.title}
        </h1>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {offer.services.map((service, index) => (
          <div
            key={index}
            style={{
              padding: '20px',
              border: '2px solid #E0E0E0',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '4px',
                height: '100%',
                backgroundColor: '#2C5282',
                borderTopLeftRadius: '8px',
                borderBottomLeftRadius: '8px',
              }}
            />
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1A1A1A',
                marginBottom: '10px',
                letterSpacing: '-0.02em',
              }}
            >
              {service.title}
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.6' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '2px solid #E0E0E0',
        }}
      >
        <p
          style={{
            fontSize: '16px',
            color: '#1A1A1A',
            fontWeight: '700',
            textDecoration: 'none',
          }}
        >
          okmic.dev@gmail.com
        </p>
      </div>
    </div>
  )
}

export default OfferPdf