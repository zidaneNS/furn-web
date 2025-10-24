import dateRange from '../../assets/icons/icon-date-range.svg';
import timeIcon from '../../assets/icons/icon-time.svg';
import groupIcon from '../../assets/icons/icon-group.svg';
import expandDown from '../../assets/icons/icon-expand-down.svg';
import { useEffect, useState } from 'react';
import './Popup.css';
import { ConfigProvider, DatePicker, Select, TimePicker } from 'antd';
import dayjs from 'dayjs';

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
  const [showAvailableTime, setShowAvailableTime] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    
    setIsLoading(true)
    const time = setTimeout(() => {
      if (showAvailableTime) {
        setIsLoading(false)
      }
    }, 1000)

    return () => clearTimeout(time);

  }, [showAvailableTime]);

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
            <ConfigProvider
              theme={{
                token: {
                  colorBorder: '#A08963',
                  borderRadius: 0,
                  fontFamily: 'Nunito, sans-serif'
                }
              }}
            >
              <DatePicker 
                prefix={Icon(dateRange)} 
                suffixIcon={Icon(expandDown)}
                defaultValue={dayjs()}
                disabledDate={(current) => current && current <= dayjs().endOf('day')}
              />
              <TimePicker 
                prefix={Icon(timeIcon)} 
                suffixIcon={Icon(expandDown)}
                defaultValue={dayjs()}
              />
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
            </ConfigProvider>
          </div>
          <div onClick={() => setShowAvailableTime(true)} className="cta-button" style={{ width: '100%' }}>Find a Table</div>

          {showAvailableTime && isLoading && <p>Loading...</p>}

          {showAvailableTime && !isLoading && (
            <div className="available-schedules-container">
              {Array.from({ length: 7 }).map((_, id) => (
                <div className="available-shcedule cta-button" key={id} onClick={() => setSelectedStep(steps[1])}>05:30 pm</div>
              ))}
            </div>
          )}
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