import dateRange from '../../assets/icons/icon-date-range.svg';
import timeIcon from '../../assets/icons/icon-time.svg';
import groupIcon from '../../assets/icons/icon-group.svg';
import expandDown from '../../assets/icons/icon-expand-down.svg';
import { useEffect, useState, type SetStateAction } from 'react';
import './Popup.css';
import { ConfigProvider, DatePicker, Select, TimePicker } from 'antd';
import dayjs from 'dayjs';
import validatePhone from '../../helper/validatePhone';

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

interface Props {
  setShowModal: React.Dispatch<SetStateAction<boolean>>
}

export default function Popup(props: Props) {
  const [selectedStep, setSelectedStep] = useState<Step>(steps[0]);
  const [showAvailableTime, setShowAvailableTime] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firsName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [request, setRequest] = useState<string>('');

  useEffect(() => {
    setIsLoading(true)
    const time = setTimeout(() => {
      if (showAvailableTime) {
        setIsLoading(false)
      }
    }, 500)

    return () => clearTimeout(time);

  }, [showAvailableTime]);

  async function handleSubmit() {
    props.setShowModal(false);
    // try {
    //   const message = await client.sendAsync({
    //     text: 'hello',
    //     from: '<zidane.nur004@gmail.com>',
    //     to: '<zidane.dummy@gmail.com>',
    //     subject: 'testing'
    //   });

    //   console.log('message: ', message);
    // } catch (err) {
    //   console.error(err);
    // }
  }

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
                  { value: '1 Person', label: '1 Person' },
                  { value: '2 People', label: '2 People' },
                  { value: '3 People', label: '3 People' },
                ]}
              />
            </ConfigProvider>
          </div>
          <button onClick={() => setShowAvailableTime(true)} className="cta-button" style={{ width: '100%' }}>Find a Table</button>

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
          <p className="form-title">Dinner Details</p>
          <div className="form-input-container">
            <Input type='text' name='firstName' id='firstName' placeholder='First Name' value={firsName} setValue={setFirstName} />
            <Input type="text" name="lastName" id="lastName" placeholder='Last Name' value={lastName} setValue={setLastName} />
          </div>
          <div className="form-input-container">
            <Input type='tel' name='phone' id='phone' value={phoneNumber} setValue={setPhoneNumber} placeholder='851...' />
            <Input type="email" name="email" id="email" placeholder='Email' value={email} setValue={setEmail} />
          </div>
          <textarea name="request" id="request" rows={5} className='input-form' placeholder='Add special request (optional)' value={request} onChange={(e) => setRequest(e.target.value)} />
          <button onClick={() => handleSubmit()} className="cta-button" style={{ width: '100%' }}>Complete Booking</button>
        </div>
      )}

    </div>
  )
}

const Icon = (src: string) => <img src={src} alt="icon" />

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>
}

function Input(props: InputProps) {
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (props.type === 'tel') {
      setErrorMessage(validatePhone(props.value) || '');
    }
  }, [props.value]);

  return (
    <div className="input-form-container">
      {props.type === 'tel' ? (
        <div className="input-phone">
          <p>+62</p>
          <input type="tel" name="phone" id="phone" placeholder={props.placeholder} value={props.value} onChange={(e) => props.setValue(e.target.value)} />
        </div>
      ) : (
        <input onChange={(e) => props.setValue(e.target.value)} value={props.value} type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} className='input-form' />
      )}
      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
    </div>
  )
}