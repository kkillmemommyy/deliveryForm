import { useState, ChangeEvent, FormEvent } from 'react';

enum AddressType {
  HOME = 'home',
  WORK = 'work',
  OTHER = 'other',
}

interface IFromState {
  addressType: AddressType;
  city: string;
  street: string;
  zipCode: string;
  houseNumber: string;
  building: string;
  isToDoor: boolean;
  entrance: string;
  floor: string;
  apartment: string;
  info: string;
}

const App = () => {
  const [formState, setFormStae] = useState<IFromState>(() => ({
    addressType: AddressType.HOME,
    city: '',
    street: '',
    zipCode: '',
    houseNumber: '',
    building: '',
    isToDoor: false,
    entrance: '',
    floor: '',
    apartment: '',
    info: '',
  }));

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : e.target.value;

    setFormStae({ ...formState, [name]: value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Адрес успешно добавлен');
    console.log(formState);
    setFormStae({
      addressType: AddressType.HOME,
      city: '',
      street: '',
      zipCode: '',
      houseNumber: '',
      building: '',
      isToDoor: false,
      entrance: '',
      floor: '',
      apartment: '',
      info: '',
    });
  };

  return (
    <div className='App'>
      <h1 className='h1'>Укажите адрес доставки</h1>
      <form className='form' onSubmit={onSubmit}>
        <label className='field'>
          Тип адреса
          <select name='addressType' value={formState.addressType} onChange={onChange}>
            <option value={AddressType.HOME}>Дом</option>
            <option value={AddressType.WORK}>Работа</option>
            <option value={AddressType.OTHER}>Другое</option>
          </select>
        </label>
        <label className='field'>
          Город
          <input required name='city' value={formState.city} type='text' placeholder='Введите название города' onChange={onChange} />
        </label>
        <label className='field'>
          Улица
          <input required name='street' value={formState.street} type='text' placeholder='Введите название улицы' onChange={onChange} />
        </label>
        <section className='section'>
          <label className='field'>
            Индекс
            <input required name='zipCode' value={formState.zipCode} type='number' onChange={onChange} />
          </label>
          <label className='field'>
            Дом
            <input required name='houseNumber' value={formState.houseNumber} type='number' onChange={onChange} />
          </label>
          <label className='field'>
            Корпус
            <input required name='building' value={formState.building} type='number' onChange={onChange} />
          </label>
        </section>
        <label className='checkbox-field'>
          <input name='isToDoor' type='checkbox' onChange={onChange} checked={formState.isToDoor} />
          Требуется доставка до двери
        </label>

        {formState.isToDoor && (
          <>
            <section className='section'>
              <label className='field'>
                Подъезд
                <input required name='entrance' value={formState.entrance} type='number' onChange={onChange} />
              </label>
              <label className='field'>
                Этаж
                <input required name='floor' value={formState.floor} type='number' onChange={onChange} />
              </label>
              <label className='field'>
                Квартира
                <input required name='apartment' value={formState.apartment} type='number' onChange={onChange} />
              </label>
            </section>
            <textarea name='info' value={formState.info} placeholder='Код домофона, как пройти...' onChange={onChange}></textarea>
          </>
        )}

        <button>Сохранить адрес</button>
      </form>
    </div>
  );
};

export default App;
