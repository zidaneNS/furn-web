import dateRange from '../../assets/icons/icon-date-range.svg';
import timeIcon from '../../assets/icons/icon-time.svg';
import groupIcon from '../../assets/icons/icon-group.svg';
import expandDown from '../../assets/icons/icon-expand-down.svg';
import { useState } from 'react';
import './Popup.css';
import { DatePicker, Select, TimePicker } from 'antd';

interface Step {
  title: string,
  sectionName: string
}

const steps: Step[] = [
  {
    title: 'Booking at Furn',
    sectionName: 'Find a Table',
  },
  {
    title: 'Booking Details',
    sectionName: 'Add your details'
  }
];

export default function Popup() {
  const [selectedStep, setSelectedStep] = useState<Step>(steps[0]);
  return (
    <div className="popup">
      <div className="step-container">
        {steps.map((step, id) => (
          <div className="step-item" key={id}>
            <p className={`step-number ${steps.indexOf(selectedStep) === id && 'selected'}`}>{id + 1}</p>
            <p>{step.sectionName}</p>
          </div>
        ))}
      </div>

      <h1 className="popup-title">{selectedStep.title}</h1>
      {steps.indexOf(selectedStep) === 0 && (
        <div className="step-content">
          <div className="detail-input-container">
            <DatePicker prefix={Icon(dateRange)} suffixIcon={Icon(expandDown)} />
            <TimePicker prefix={Icon(timeIcon)} suffixIcon={Icon(expandDown)} />
            <Select 
              prefix={Icon(groupIcon)} 
              suffixIcon={Icon(expandDown)} 
              defaultValue={'2 People'}
              options={[
                {value: '1 Person', label: '1 Person'},
                {value: '2 People', label: '2 People'},
                {value: '3 People', label: '3 People'},
              ]}
            />
          </div>
          <div className="cta-button" style={{ width: '100%' }}>Find a Table</div>

          <div className="available-schedules-container">
            {Array.from({ length: 5 }).map((_, id) => (
              <div className="available-shcedule cta-button" key={id} onClick={() => setSelectedStep(steps[1])}>05:30 pm</div>
            ))}
          </div>
        </div>
      )}

      {steps.indexOf(selectedStep) === 1 && (
        <div className="step-content">
          test
        </div>
      )}

    </div>
  )
}

const Icon = (src: string) => <img src={src} alt="icon" />