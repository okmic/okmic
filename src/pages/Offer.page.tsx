import { useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useSelector } from 'react-redux'
import { stateType } from '../redux/store'
import Notification from '../components/Notification/Notification'
import ReactDOMServer from 'react-dom/server' 
import OfferPdf from '../components/Pdf/OfferPdf'
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  SmartToy as RobotIcon,
  Brush as PaintBrushIcon,
  Settings as CogsIcon,
  School as ChalkboardTeacherIcon,
  PictureAsPdf,
  Download,
} from '@mui/icons-material'

const icons = [<CodeIcon className="w-12 h-12 mb-4 text-blue-500" />, <DatabaseIcon className="w-12 h-12 mb-4 text-blue-500" />, <RobotIcon className="w-12 h-12 mb-4 text-blue-500" />, <PaintBrushIcon className="w-12 h-12 mb-4 text-blue-500" />, <CogsIcon className="w-12 h-12 mb-4 text-blue-500" />, <ChalkboardTeacherIcon className="w-12 h-12 mb-4 text-blue-500" />]


const OfferPage = () => {
  const [showNotification, setShowNotification] = useState(false)
  const state = useSelector((state: stateType) => state.appReducer)

  const handleDownloadPdf = () => {
    setShowNotification(true)
    const pdfContentString = ReactDOMServer.renderToString(
      <OfferPdf offer={state.language.offer} />
    )

    const pdfContent = document.createElement('div')
    pdfContent.style.position = 'absolute'
    pdfContent.style.left = '-9999px'
    pdfContent.innerHTML = pdfContentString
    document.body.appendChild(pdfContent)

    html2canvas(pdfContent, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#fff',
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      pdf.save('offer.pdf')

      document.body.removeChild(pdfContent)
    })
  }

  return (
    <main>
      {showNotification && (
        <Notification
          message=""
          children={
            <>
            <PictureAsPdf className="w-12 h-12" />
            <Download className="w-12 h-12" />
            </>
          }
          type="warning"
          duration={5000}
          onClose={() => setShowNotification(false)}
        />
      )}

      <div
        id="offer-content"
        className="p-8"
        style={{
          backgroundColor: state.theme.styles.app.background,
          color: state.theme.styles.app.color,
        }}
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{state.language.offer.title}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {state.language.offer.services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl border"
              style={{
                backgroundColor: state.theme.styles.app.background,
                color: state.theme.styles.app.color,
                borderColor: state.theme.status ? '#4A5568' : '#E2E8F0',
              }}
            >
              <div className="text-center">
                {icons[index]}
                <h2 className="text-2xl font-bold mb-4 break-words whitespace-normal">
                  {service.title}
                </h2>
                <p className="break-words whitespace-normal">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-left">
          <button
            id="download-button"
            onClick={handleDownloadPdf}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            to PDF  <Download className="w-12 h-12" />
          </button>
        </div>
      </div>
    </main>
  )
}

export default OfferPage